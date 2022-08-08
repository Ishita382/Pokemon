import React from "react";
import { usePokemonhooks } from "../redux/Hooks/pokemonhooks";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
function Names(props) {


  const { data } = props;
  const { pokemon_data, get_pokemon_names } = usePokemonhooks();
  const dispatch = useDispatch()
  let initial = useSelector((state) => state.addProductList);
  let url = initial.url;

  useEffect(() => {
    dispatch(get_pokemon_names(url));
  }, [url])
  
  return (
    <div>
      {
        Object.keys(data).length !== 0 && data.results.map((item) => (<button key={item.url} onClick={() => pokemon_data(item.url)}>

          {item.name}
        </button>))}
    </div>
  )
}

export default Names;