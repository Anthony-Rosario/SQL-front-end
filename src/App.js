
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './HomePage.js';
import ListPage from './ListPage.js';
import DetailPage from './DetailPage.js';
import CreatePage from './CreatePage.js';

export default function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route 
          path="/" 
          exact
          components = { HomePage }
          />
         
          <Route 
          path="/skateboards" 
          exact
          component={ ListPage }
          />
          
          <Route 
          path="/skateboards/:id" 
          exact
          component={ DetailPage }
          />
          
          <Route 
          path="/create" 
          exact
          component={ CreatePage }
          />
          
        </Switch>
      </Router>
    </div>
  );
}