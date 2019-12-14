import React, { useEffect, useState } from "react";
import CharacterCard from "./CharacterCard";
import Axios from "axios";


export default function CharacterList() {
  // TODO: Add useState to track data from useEffect

  const [characters, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios
    .get('https://rickandmortyapi.com/api/character/')
    .then(response => {
      console.log(response.data.results);
      const characters = response.data.results;
      setCharacter([...characters, response.data]);
    })
    .catch(error => {
      console.log("Sorry, you've got an error", error)
    });



  }, []);




  return (
    <section className="character-list">
      {characters.map(character =>
        <CharacterCard
          name={character.name}
          species={character.species}
          image={character.image}
        />
      )}
    </section>
  );
}
