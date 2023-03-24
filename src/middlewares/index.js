export const logger = (store) => (next) => (action) =>{
    next(action)
}

export const toUpper = (store) => (next) => (action) => {
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
}
