
import './App.css';
// import PropComp from './Components/PropComp';
// import ComponentWithProps from './Components/ComponentWithProps';
// import MilesAhead from './Components/MilesAhead';
// import CustomerDetails from './Components/CustomerDetails';
// import Clock from './Components/Clock';
// import Car from './Components/Car';
// import ProductTable from './ProductTable/ProductTable';
// import SearchProduct from './ProductTable/SearchProduct';
// import Game from './GameRoom/Game';
// import ProductManager from './BasketExercise/ProductManager';
// import Shopping from './Hooks/Shopping';
// import LessText from './Hooks/LessText';
// import Greet from './Hooks/PassName';
// import EmployeeInfo from './DataRequests/DataRequest';
import FilmRequest from './DataRequests/FilmRequest';
import Nav from './ReactRouting/Exercises/Nav';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './ReactRouting/Exercises/Home';
import Users from './ReactRouting/Exercises/Users';
import Contact from './ReactRouting/Exercises/Contact';
import NotFound from './ReactRouting/Exercises/404';
import About from './ReactRouting/About';
import Shop from './ReactRouting/Shop';

const App = () => {
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
    <ProductManager/>
    <Shopping/>
    <br/>
    <LessText text="Team 4 Rulezzzz" maxLength={6}/>
    <br/>
    <Greet name="Jodi"/>
      <EmployeeInfo/>*/}
    <FilmRequest/>
      {/* <Router>
             <div>
                     <h4>
                         <Link to="/">Home</Link>
                     </h4>
                     <h4>
                         <Link to="/users">Users</Link>
                     </h4>
                     <h4>
                         <Link to="/contact">Contact</Link>
                     </h4>
                 <Switch>
                     <Route exact path="/">
                         <Home />
                     </Route>
                     <Route path="/users/:id">
                         <Users />
                     </Route>
                     <Route path="/users">
                         <Users />
                     </Route>
                     <Route path="/contact" >
                         <Contact />
                     </Route>
                     <Route path="/:badRoute">
                        <NotFound />
                     </Route>
                 </Switch>
             </div>
         </Router> */}

    </>
  );
}

export default App;
