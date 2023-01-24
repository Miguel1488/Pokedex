import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PokedexDetail = () => {

    const { id } = useParams();
    const [pokemon, setPokemon] = useState({});


    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
            .then(res => setPokemon(res.data))
            
    }, [ ]);

    console.log(pokemon);




    return (
        <div>
            <h1>{pokemon.name}</h1>
            <div>id:<b>{id}</b></div>
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
        </div>
    );
};

export default PokedexDetail;