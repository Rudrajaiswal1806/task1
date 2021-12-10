import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// css //
import  "../node_modules/bootstrap/dist/css/bootstrap.css";
import  "./App.css";
// Pages //
import Checkout from "./pages/Checkout";
import Landing from "./Landing";
import Menu from "./pages/Menu";
import MenuOrder from "./pages/MenuOrder";



class App extends React.Component {
  render() {
    return (
      <Router> 
        <div >             
            <Switch>
              <Route exact path='/' component={Landing}/>
              <Route  path='/menu' component={Menu}/>
              <Route  path='/menuorder' component={MenuOrder}/>
              <Route  path='/checkout' component={Checkout}/>              
            </Switch>        
        </div>
      </Router>
    );
  }
}

export default App;