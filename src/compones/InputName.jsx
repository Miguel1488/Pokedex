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
            <h1> Input name</h1>
            <input
                type="text"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
            />
            <button onClick={clickButton}>Submit</button>
        </div>
    );
};

export default InputName;