
import './App.css';
import PropComp from './Components/PropComp';
import ComponentWithProps from './Components/ComponentWithProps';
import MilesAhead from './Components/MilesAhead';
import CustomerDetails from './Components/CustomerDetails';
import Clock from './Components/Clock';
import Car from './Components/Car';
import ProductTable from './ProductTable/ProductTable';
import SearchProduct from './ProductTable/SearchProduct';
import Game from './GameRoom/Game';
import ProductManager from './BasketExercise/ProductManager';
import Shopping from './Hooks/Shopping';
import LessText from './Hooks/LessText';
import Greet from './Hooks/PassName';

function App() {
  return (
    <>
    {/* <PropComp/>
    <br/>
    <ComponentWithProps header="Yo" content="Team" number={4} nonexistent={true}/>
    <br/>
    <MilesAhead/>
    <br/>
    <CustomerDetails/>
    <br/>
    <Clock/>
    <br/>
    <Car/>
    <br/>
    <ProductTable/>
    <Game/> 
    <ProductManager/>*/}
    <Shopping/>
    <br/>
    <LessText text="dgdskskjdfghds" maxLength={6}/>
    <br/>
    <Greet name="Jodi"/>
    </>
  );
}

export default App;
