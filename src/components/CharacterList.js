import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import "../index.css";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      // setCharacters(res.data.results);
      console.log(res.data.results);
      setCharacters(res.data.results);
    }).catch(e => console.log(e));
  }, []);

  return (
    <section className="character-list">
        {characters.map(character => 
          <CharacterCard
            id={character.id}
            name={character.name}
            species={character.species}
            image={character.image}
            gender={character.gender}
            status={character.status}
          />   
          )
        }   
    </section>
  );
}
