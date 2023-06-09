import 'antd/dist/reset.css';
import './App.css';
import Searcher from './components/Searcher';
import { Col, Spin } from 'antd';
import logo from './statics/logo.svg';
import PokemonList from './components/PokemonList';
import { useEffect } from 'react';
import { getPokemon } from './api';
import {getPokemonsWithDetails} from './actions'
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

function App() {

const pokemons = useSelector((state) => state.getIn(['data','pokemons'], shallowEqual)).toJS();
const loading = useSelector((state) => state.getIn(['ui', 'loading']));
const dispatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () =>{
      // dispatch(setLoading(true))
      const pokemonsRes = await getPokemon();
      dispatch(getPokemonsWithDetails(pokemonsRes))
      // dispatch(setLoading(false))
      
    };

    fetchPokemons();
  }, [])
  return (
    <div className="App"> 
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux'/>
      </Col>
      <Col span={8} offset={8}>
        <Searcher/>
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size='large' />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
