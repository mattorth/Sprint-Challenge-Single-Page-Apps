import React, { useState } from "react";
import CharacterCard from "./CharacterCard";
import { Route } from "react-router-dom";

export default function SearchForm({placeholder, handleChange, handleSubmit}) {

  return (
    <section className="search-form">
      <form onSubmit={handleSubmit}>
        <input name='search' type='search' placeholder={placeholder} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </section>
  
  )
  
}
