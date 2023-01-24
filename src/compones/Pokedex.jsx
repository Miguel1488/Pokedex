import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';


const Pokedex = () => {

    const userName = useSelector(state => state.userName);

    const [pokedex, setpokedex] = useState([]);
    const [inputSearch, setInputSearch] = useState("");
    const [type, setType] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res => setpokedex(res.data.results))


        axios.get('https://pokeapi.co/api/v2/type')
            .then(res => setType(res.data.results));
    }, [])


    console.log(type);

    const search = () => {

        navigate(`/pokedex/${inputSearch.toLocaleLowerCase()}`)

    }

    const filterType =(e)=> {
        axios.get(e.target.value)
            .then(res => setpokedex(res.data.pokemon))
    }


    return (
       
        <div>
             <head className='header'> </head>
            <h1>pokedex</h1>
            <p>welcom {userName}!</p>
            <div>
                <input
                    type="text"
                    placeholder='search Pokemon'
                    value={inputSearch}
                    onChange={e => setInputSearch(e.target.value)}
                />
                <button onClick={search}>Search</button>
            </div>
            <div>
                <select onChange={filterType} name="" id="">
                    {type.map(type => (
                        <option value={type.url} key={type.url}>{type.name}
                        </option>
                    ))}


                </select>

            </div>
            <ul>
                {
                    pokedex.map(pokedex => (
                        <PokemonCard
                            url={pokedex.url}
                            key={pokedex.url}
                        />
                    ))
                   }
            </ul>
        </div>
    );
};

export default Pokedex;