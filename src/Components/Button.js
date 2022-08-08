import React from "react"
import { usePokemonhooks } from "../redux/Hooks/pokemonhooks";

function Button(props) {
  const { data } = props;
  const { change_pokemon_names } = usePokemonhooks();
  return (
    <div>
      <button onClick={() => change_pokemon_names(data.previous)}>Previous</button>
      <button onClick={() => change_pokemon_names(data.next)}> Next  </button>
    </div>
  )
}

export default Button;