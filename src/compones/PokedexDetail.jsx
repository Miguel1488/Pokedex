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
            <div>{pokemon.weight}</div>
            <div className='imagDetail'>
                <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                <div>{pokemon.stats?.[0].base_stat}</div>
                <div>{pokemon.stats?.[1].base_stat}</div>
                <div>{pokemon.stats?.[2].base_stat}</div>
                <div>{pokemon.stats?.[5].base_stat}</div>


            </div>
            <button onClick={back}>regresar</button>
             <button onClick={back1}>inicio</button>
        </div>

    );
};

export default PokedexDetail;