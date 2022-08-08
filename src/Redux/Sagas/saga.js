import { fork } from 'redux-saga/effects'
import PokemonList from './PokemonList';
import PokemonDetails from './PokemonDetails';

function* pokemonSaga() {

    yield fork(PokemonDetails)
    yield fork(PokemonList)
    
}

export default pokemonSaga;