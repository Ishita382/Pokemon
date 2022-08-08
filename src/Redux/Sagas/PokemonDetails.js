import { put, takeEvery } from 'redux-saga/effects'
import { GET_POKEMON_DETAILS_SUCCESS, GET_POKEMON_DETAILS } from '../Actions/constant';

function* getPokemonDetails(action) {

    let pokdata = yield fetch(action.payload.url);
    pokdata = yield pokdata.json();
    yield put({ type: GET_POKEMON_DETAILS_SUCCESS, pokdata });

}

function* PokemonDetails() {
    yield takeEvery(GET_POKEMON_DETAILS, getPokemonDetails)
}

export default PokemonDetails;
