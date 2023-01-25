import React from 'react';
import Fondo from '../assets/imag/picachu.gif'

const Loanging = () => {

//const [loading, setLoading] = useState(false)

    return (
        <div className='loaging'>
            <img  src={Fondo} alt="Loading..." />
            <h1>..cargando pokedex</h1>
        </div>
    );
};

export default Loanging;