import logo from './logo.svg';
import './App.css';

import './App.css';
import { useSelector } from 'react-redux';
import Heading from './Components/Heading';
import Card from './Components/Cards';
import Names from './Components/Names';
import Button from './Components/Button';
function App() {

  let initial = useSelector((state) => state.addProductList);
  let data = initial.data;

  let pokinitial = useSelector((state) => state.addProductList);
  let pokedata = pokinitial.pokemonobj;

  return (
    <div className='App'>

      <Heading />

      <Names data={data} />

      <Button data={data} />

      <Card pokedata={pokedata} />
      
    </div>

  );
}
export default App;
