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
        <div className='contenedor-input'>
            <h1 className='title'>¡Hola entrenador!</h1>
            <div className='phrase'><p>Para poder comenzar, dame tu nombre</p></div>
            <input className='input'
                type="text"
                placeholder="Tu nombre..."
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button className='button-input' onClick={clickButton}>Submit</button>
        </div>
    );
};

export default InputName;