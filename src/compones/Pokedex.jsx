import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header2 from './Header2';
import PokemonCard from './PokemonCard';


const Pokedex = () => {

  const userName = useSelector(state => state.userName);

  const [pokedex, setpokedex] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [type, setType] = useState([]);
 

  const navigate = useNavigate();

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1279')
      .then(res => setpokedex(res.data.results))


    axios.get('https://pokeapi.co/api/v2/type')
      .then(res => setType(res.data.results));
  }, [])


  console.log(type);

  const search = () => {

    navigate(`/pokedex/${inputSearch.toLocaleLowerCase()}`)

  }

  const filterType = (e) => {
    axios.get(e.target.value)
      .then(res => setpokedex(res.data.pokemon))
  }

  const back = () => {
    navigate(-1)
  }

  const [page, setPage] = useState(1);
  const lastIndex = page * 20;
  const firstIndex = lastIndex - 20;
  const pagination = pokedex?.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(pokedex?.length / 20);

  const numbers = [];

  for (let i = page - 3; i <= page + 3; i++) {
    if (i >= page && i <= lastPage) {
      numbers.push(i);
    }
  }
  const typeOne = pokedex?.types?.[1]?.type.name;
  const typeTwo = pokedex?.types?.[0]?.type.name;

  const changeColorCardPokemon = () => {
    if (typeTwo === "normal" || typeOne === "") {
      return "#735159";
    } else if (typeTwo === "fighting" || typeOne === "") {
      return "#973F26";
    } else if (typeTwo === "poison" || typeOne === "") {
      return "#5B2D86";
    } else if (typeTwo === "ground" || typeOne === "") {
      return "#FFEB3B";
    } else if (typeTwo === "rock" || typeOne === "") {
      return "#46180B";
    } else if (typeTwo === "bug" || typeOne === "") {
      return "#8BC34A";
    } else if (typeTwo === "ghost" || typeOne === "") {
      return "#31336A";
    } else if (typeTwo === "fire" || typeOne === "") {
      return "#FB6C6C";
    } else if (typeTwo === "water" || typeOne === "") {
      return "#70B7FA";
    } else if (typeTwo === "grass" || typeOne === "") {
      return "#48D0B0";
    } else if (typeTwo === "electric" || typeOne === "") {
      return "#E2E02D";
    } else if (typeTwo === "ice" || typeOne === "") {
      return "#86D2F4";
    } else if (typeTwo === "dragon" || typeOne === "") {
      return "#448A94";
    } else if (typeTwo === "dark" || typeOne === "") {
      return "#030706";
    } else if (typeTwo === "fairy" || typeOne === "") {
      return "#981844";
    } else if (typeTwo === "psychic" || typeOne === "") {
      return "grey";
    } else if (typeTwo === "steel" || typeOne === "") {
      return "#0093B2";
    } else {
      return "grey";
    }
  };







  return (

    <div className='general1'>
      <Header2 />
      <div className='welcom'><p>¡Bienvenido {userName} aquí podras encontar tu pokemón favorito!</p></div>

      <div className='containerGeneral2'>
        <input className='inputPokede'
          type="text"
          placeholder='search Pokemon'
          value={inputSearch}
          onChange={e => setInputSearch(e.target.value)}
        />
        <button className='butoonPokedex' onClick={search}>Search</button>
      </div>
      <div className='Containergeneralpokedex'>
        <select className='typepokedex' onChange={filterType} name="" id="">
          {type.map(type => (
            <option value={type.url} key={type.url}>{type.name}
            </option>

          ))}


        </select>
      <button className='buttonback' onClick={back}><i className= 'chevron bx bxs-chevron-left-circle'></i></button>

      </div>
      <ul className='ulpokedex'>
        {
          pagination.map(pokedex => (
            <PokemonCard
              url={pokedex.url ? pokedex.url : pokedex.pokemon.url}
              key={pokedex.url ? pokedex.url : pokedex.pokemon.url}
            />
          ))
        }
      </ul>
      <footer>
        <div className="containerbuttonFooter">
          <button
            className="btn-back"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}>
            back
          </button>
          {numbers.map((number) => (
            <button
              key={number}
              className="pagination_numbers"
              onClick={() => setPage(number)}>
              {number}
            </button>
          ))}
          <button
            className="btn-next"
            onClick={() => setPage(page + 1)}
            disabled={page === lastPage}>
            next
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Pokedex;