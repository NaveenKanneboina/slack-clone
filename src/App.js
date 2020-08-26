import React from 'react';
import './App.css';
import Header from "./Header.js";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    <div className="app">
      <Router>
        <Header/>
        <div className="app_body">
          <Sidebar/>
            <Switch>
              <Route path="/room/:roomId">
                <Chat/>
              </Route>
              <Route path="/">
                <h1>welcome</h1>
              </Route>
            </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
