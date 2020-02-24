import React, { useState, useEffect, setState } from "react";
import CharacterCard from "./CharacterCard";
import axios from 'axios';
import "../index.css";

export default function SearchForm(props) {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  let updatedList = characters;
  let changes = 0;

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      // setCharacters(res.data.results);
      console.log(res.data.results);
      setCharacters(res.data.results);
    }).catch(e => console.log(e));
  }, [changes]);


const handleChange = event => {

    setCharacters(characters.filter( item =>
    item.name.toLowerCase().includes(event.target.value.toLowerCase()) ||
    item.status.toLowerCase().includes(event.target.value.toLowerCase()) ||
    item.species.toLowerCase().includes(event.target.value.toLowerCase())

    ))
    changes++;
    console.log(updatedList);


};

 
  return (
    <section className="search-form">
     <form>
        <label>
        Search
          <div>
            <input
              type="text"
              name="search"
              placeholder="Search for come content!"
              // value={user.name}
              onChange={event => handleChange(event)}
            />
          </div>
        </label>
      </form>
      {updatedList.map(character => 
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
