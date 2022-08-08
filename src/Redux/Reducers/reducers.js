import { SET_POKEMON_LIST, GET_POKEMON_DETAILS_SUCCESS, CHANGE_POKEMON_NAMES } from "../Actions/constant";

const url = "https://pokeapi.co/api/v2/pokemon-species/?offset=0&limit=20";

export const addProductList = (state = { url: url, data: {}, pokemonobj: [] }, action) => {
    switch (action.type) {
        case SET_POKEMON_LIST:
            console.log("reducer is running");
            return { ...state, data: action.data };

        case CHANGE_POKEMON_NAMES:
            return { ...state, url: action.payload.url };

        case GET_POKEMON_DETAILS_SUCCESS:
            console.log("data reducer is running");
            return { ...state, pokemonobj: action.pokdata };

        default:
            return state;
    }
}
