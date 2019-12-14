import React, { useState, useEffect } from "react";
import Axios  from "axios";
import CharacterCard from "./CharacterCard";
import CharacterList from "./CharacterList";



export default function SearchForm() {

  const [name, setName] = useState("");
  const [search, setSearch] = useState([]);

  function onSearch(name) {
    Axios
    .get(`https://rickandmortyapi.com/api/character/`)
    .then(response => {
      setSearch(response.data.results);
      console.log("search", response.data.results);
    }
    );
  }

  const handleInputChange = event => {
    setName(event.target.value);
  };
 
  return (
    <section className="search-form">
     <form onSubmit={event => {
        event.preventDefault();
        onSearch(name);
      }}
      >
        <input onChange={event => handleInputChange(event)}
        placeholder="name"
        value={name}
        name="name"/>
        <button type="submit">Search</button>
      </form>

      {search.map(search => {
        return (
          <div className="searchResults">
            <img src={search.image}/>
            <h2 className="names">{search.name}</h2>
            <p>{search.species}</p>
          </div>
        )
      })}
      

    </section>
  );
}
