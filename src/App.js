import React from "react";
import Header from "./components/Header.js";
import CharacterList from "./components/CharacterList";
import WelcomePage from "./components/WelcomePage";
import { Route, Link } from "react-router-dom";

export default function App() {


  return (
    <main>
      <Route exact path="/" render={(props) => {
        return <WelcomePage />
      }} />
      <Route path="/character-list" render={(props) => {
        return <CharacterList {...props} />
      }} />
      
      <Link to="/character-list">Character List</Link>
    </main>
  );
}
