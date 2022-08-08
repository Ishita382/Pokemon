import { useDispatch } from "react-redux";
import { DISPLAY_POKEMON_NAMES } from "../Actions/constant";
import { CHANGE_POKEMON_NAMES } from "../Actions/constant";
import { GET_POKEMON_DETAILS } from "../Actions/constant";

export const usePokemonhooks = () => {

    const dispatch = useDispatch();

    const get_pokemon_names = (url) => {

        return dispatch({
            type: DISPLAY_POKEMON_NAMES,
            payload: {
                url: url,
            },
        });

    };

    const change_pokemon_names = (url) => {

        return dispatch({
            type: CHANGE_POKEMON_NAMES,
            payload: {
                url: url,
            },
        });

    };

    // const pokemon_data = (url) => {

    //     return dispatch({
    //         type: GET_POKEMON_DETAILS,
    //         payload: {
    //             url: url,
    //         },

    //     });

    // };

    return { get_pokemon_names, change_pokemon_names, pokemon_data };
};