import { put, takeEvery } from 'redux-saga/effects'
import { SET_POKEMON_LIST, DISPLAY_POKEMON_NAMES } from '../Actions/constant';

function* setPokemonList(action) {

    let data = yield fetch(action.payload.url);
    data = yield data.json();
    console.log("api is called", data);
    yield put({ type: SET_POKEMON_LIST, data });
}

function* PokemonList() {
    yield takeEvery(DISPLAY_POKEMON_NAMES, setPokemonList);
}

export default PokemonList;