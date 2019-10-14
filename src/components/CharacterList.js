import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";
import SearchForm from "./SearchForm";

export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState('');
  
  const Home = styled.h1`
    font-size: 3rem;
    color: blue;
  `;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get(`https://rickandmortyapi.com/api/character/?name=${search}`)
      .then(response => {
        console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('Server Error', error);
      });

  }, [search]);
  
  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitting...');
  }
  return (
    <section className="character-list">
      <div onClick={() => {
        console.log(props);
        props.history.push('/');
      }}>
        <Home>Home</Home>
      </div>

      <SearchForm placeholder='search' value={search} handleChange={handleChange} handleSubmit={handleSubmit} />
        
      {characters.map(character => (
        <CharacterCard key={character.id} character={character} />
    ))}
    </section>
  );
}
