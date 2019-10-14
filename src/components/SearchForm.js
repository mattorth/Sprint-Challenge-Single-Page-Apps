import React from "react";
import CharacterCard from "./CharacterCard";

export default function SearchForm({placeholder, handleChange, handleSubmit, value }) {

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input name='search' type='search' placeholder={placeholder} onChange={handleChange} value={value} />
        <button>Submit</button>
      </form>
    </section>
  
  )
  
}
