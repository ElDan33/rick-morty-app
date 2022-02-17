import imagenHome from './Images/rick-morty.png'
import './App.css';
import Characters from './Components/Characters.jsx';
import { useState } from 'react';

function App() {
  const [characters, setCharacters] = useState("");

  const reqApi = async ()=>{
    const api = await fetch("https://rickandmortyapi.com/api/character");
    const characterApi = await api.json();
    setCharacters(characterApi.results);
    console.log(characterApi);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="titulo">Rick & Morty</h1>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters}/>
        ): (
          <>
            <img src={imagenHome} alt="Rick & Morty" className="img-home"/>
            <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
          </>
        )}
        
        
      </header>
    </div>
  );
}

export default App;
