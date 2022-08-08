

import { useSelector } from 'react-redux';
import Heading from './Components/Heading';
import Card from './Components/Cards';

import Buttons from './Components/Buttons';
function App() {

  let initial = useSelector((state) => state.addProductList);
  let data = initial.data;

  let pokinitial = useSelector((state) => state.addProductList);
  let pokedata = pokinitial.pokemonobj;

  return (
    <div className='App'>

      <Heading />
      <Buttons data={data} />
      <Card pokedata={pokedata} data={data} />



    </div>

  );
}
export default App;
