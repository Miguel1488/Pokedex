import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const PokedexDetail = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))

    }, []);

    console.log(pokemon);

    const back = () => {
        navigate(-1)
    }

    const back1 = () => {
        navigate(-2)
    }


    return (

        <div className='containerDetail'>
            <div className='id'>#<b>{pokemon.id}</b></div>
            <div className='titleDetail'><h1>{pokemon.name}</h1></div>
            <div className='weigth'>Peso: {pokemon.weight}</div>
            <div className='imagDetail'>
                <div className='imagcontainer'> <img src={pokemon.sprites?.other.dream_world.front_default} alt="" /></div>
                <div className='container_progreso'>
                    <h2>HP: {pokemon.stats?.[0].base_stat}</h2>
                    <div className="barra">
                        <div className={"progreso"} style={{ width: `${pokemon.stats?.[0].base_stat}%`}} >
                        </div>
                    </div>

                </div>
                <div>ATAQUE: {pokemon.stats?.[1].base_stat}</div>
                <div>DEFENSA :{pokemon.stats?.[2].base_stat}</div>
                <div>VELOCIDAD: {pokemon.stats?.[5].base_stat}</div>


            </div >
            <div className='butonprogres'>
                <button className='butonback' onClick={back}>regresar</button>
                <button className='butoninit' onClick={back1}>inicio</button>
            </div>
        </div >

    );
};

export default PokedexDetail;