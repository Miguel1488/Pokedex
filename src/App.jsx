
import { HashRouter, Route, Routes } from 'react-router-dom'
import Pokedex from './compones/Pokedex'
import InputName from './compones/InputName'
import PokedexDetail from './compones/PokedexDetail'
import ProtectedRoutes from './compones/ProtectedRoutes'
import Header from './compones/Header'
import './App.css'

function App() {


  return (


    <HashRouter>
      
        <Header />
        <div className="App">

        <Routes>
          <Route path="/" element={<InputName />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/pokedex" element={<Pokedex />} />
          <Route  path="/pokedex/:id" element={<PokedexDetail />} />
          </Route>
        </Routes>

      </div>
    </HashRouter >

  )
}

export default App
