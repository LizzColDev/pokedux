import { fromJS } from "immutable";
import { SET_POKEMONS, SET_FAVORITE, SET_LOADING} from "../actions/types"


const initialState = fromJS({
    pokemons: [],
    loading: false,
  });
  
  export const pokemonsReducer = (state = initialState, action) => {
console.log(state)

    switch (action.type) {
      case SET_POKEMONS:
        // return { ...state, pokemons: action.payload };
        return state.setIn(['pokemons'], fromJS(action.payload));
      case SET_FAVORITE:
        // const newPokemonsList = [...state.pokemons];

        // const currentPokemonIndex = newPokemonsList.findIndex(
        //   (pokemon) => {
        //       return pokemon.id === action.payload.pokemonId
        //   });

        const currentPokemonIndex = state.get('pokemons').findIndex((pokemon) =>{
          return pokemon.get('id') === action.payload.pokemonId;
        });
        
        if(currentPokemonIndex <0){
          return state;
        }
        
        const isFavorite = state.getIn(['pokemons', currentPokemonIndex, 'favorite'])        
        return state.setIn(['pokemons', currentPokemonIndex, 'favorite'], !isFavorite);

      case SET_LOADING:
        return state.setIn(['loading'], action.payload)
      // case SET_LOADING:
      //   return { ...state, loading: action.payload };
      default:
        return state;
    }
  };