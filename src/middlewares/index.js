import { SET_POKEMONS } from "../actions/types";

export const logger = (store) => (next) => (action) =>{
    console.log(action)

    next(action)
}

export const toUpper = (store) => (next) => (action) => {
    console.log(action);
    if (action.type === SET_POKEMONS) {
        const featured = action.payload.map(pokemon => {
            return {
                ...pokemon,
                name: pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1),
            }
        });

        const updateAction = {
            ...action,
            payload:featured
        }
        next(updateAction)
    } else {
        next(action);
    }
}