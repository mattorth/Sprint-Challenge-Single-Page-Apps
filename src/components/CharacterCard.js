import React from "react";
import styled from "styled-components";

const Characterh2 = styled.h2`
  color: red;
`;

export default function CharacterCard({character}) {
  console.log(character);
  return (
  <div><Characterh2>{character.name}</Characterh2></div>
  );
}
