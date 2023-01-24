import React,{ useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { pokedexName } from '../store/slices/userName.slice';

const InputName = () => {

    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

const navigate = useNavigate();

const clickButton =() => {
    dispatch(pokedexName(inputValue));
    navigate("/pokedex");
}

    return (
        <div>
            <div><img src="./src/assets/imag/image 11.png" alt=""></img></div>
            <h1 className='title'>¡Hola entrenador!</h1>
            <div className='phrase'><p>Para poder comenzar, dame tu nombre</p></div>
            <input className='input'
                type="text"
                placeholder="Tu nombre..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button className='button-input' onClick={clickButton}>Submit</button>
            <footer  className='contenedor-input'></footer>
        </div>
        
    );
};

export default InputName;