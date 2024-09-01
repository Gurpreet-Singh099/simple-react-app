import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card'; // Ensure the path is correct
import './App.css';

const App = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(response => {
        setPokemonData(response.data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const filteredPokemon = pokemonData.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Pokémon App</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <div className="card-container">
        {filteredPokemon.map(pokemon => (
          <Card
            key={pokemon.name}
            name={pokemon.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.url.split('/').slice(-2, -1)[0]}.png`}
            url={pokemon.url}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
