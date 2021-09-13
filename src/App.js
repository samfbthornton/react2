
import './App.css';
import PropComp from './Components/PropComp';
import ComponentWithProps from './Components/ComponentWithProps';
import MilesAhead from './Components/MilesAhead';
import CustomerDetails from './Components/CustomerDetails';
import Clock from './Components/Clock';
import Car from './Components/Car';
import ProductTable from './Components/ProductTable';

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
    <br/> */}
    <ProductTable/>
    </>
  );
}

export default App;
