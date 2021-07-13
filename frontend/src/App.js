
import {Switch,Route} from "react-router-dom";
import './App.css';
import Blog from "./Components/Blog/Blog";
import Header from './Components/Header';
import Home from "./Components/Home";

function App() {
  
  return (
      <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/Header' component={Header}></Route>
          <Route exact path='/Blog' component={Blog}></Route>
      </Switch>
  );
}

export default App;
