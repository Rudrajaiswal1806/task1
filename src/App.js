import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
// css //
import  "../node_modules/bootstrap/dist/css/bootstrap.css";
import  "./App.css";
// Pages //
import Header from "./components/Header";
import Landing from "./Landing";



class App extends React.Component {
  render() {
    return (
      <Router> 
        <div >
          <Header/>             
            <Switch>
              <Route exact path='/' component={Landing}/>
            </Switch>        
        </div>
      </Router>
    );
  }
}

export default App;