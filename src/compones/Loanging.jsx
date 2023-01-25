import React from 'react';
import Fondo from '../assets/imag/picachu.gif'

const Loanging = () => {

//const [loading, setLoading] = useState(false)

    return (
        <div className='loading'>
            <img className='picachu' src={Fondo} alt="Loading..." />
            <h1 className='Dowload'>..cargando pokedex</h1>
        </div>
    );
};

export default Loanging;