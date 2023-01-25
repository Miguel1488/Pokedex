import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonCard = ({ url }) => {

    const [pokedex, setPokedex] = useState({});
    const [cardStyle, setCardStyle] = useState("")

    const navigate = useNavigate();

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setPokedex(res.data)
            })



    }, []);

    console.log(pokedex);

    return (
        <li className='col'>
            <div className={`card ${pokedex.types?.[0].type.name}`} onClick={() => navigate(`/pokedex/${pokedex.id}`)}>

                <b >{pokedex.name}</b>
                <div className='containerimag'>
                    <img className='imag' src={pokedex.sprites?.other.dream_world.front_default} alt="" />

                </div>
                <div>
                    {
                        pokedex.types?.map(e =>
                            <h3 key={e.type.slot}>{e.type.name}</h3>
                        )

                    }
                </div>
            </div>
        </li>
    );
};

export default PokemonCard;