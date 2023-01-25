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
        <li className='col'>
        <div className= 'card' onClick={() => navigate(`/pokedex/${pokedex.id}`)}>
            
                <b >{pokedex.name}</b>
                <div className='containerimag'>
                <img className='imag' src={pokedex.sprites?.other.dream_world.front_default} alt="" />
                </div>
        </div>
        </li>
    );
};

export default PokemonCard;