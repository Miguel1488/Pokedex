import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const [pokedex, setPokedex] = useState({});

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => setPokedex(res.data))


    }, []);

    console.log(pokedex);

    return (
        <div className="Cotainer_Pokemon" onClick={() => navigate(`/pokedex/${pokedex.id}`)}>
            
                <b>{pokedex.name}</b>
                <div className='conainerimag'>
                <img className='imag' src={pokedex.sprites?.other.dream_world.front_default} alt="" />
                </div>
        </div>
    );
};

export default PokemonCard;