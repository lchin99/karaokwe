import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Start from './pages/Start';
import CreateRoom from './pages/CreateRoom';
import JoinRoom from './pages/JoinRoom';
import PickSongs from './pages/PickSongs';
import ParticleComponent from './components/ParticleComponent';
import { brightPink } from "./components/Base/colors";

function App() {
  return (
    <div className="App">
      <Router>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: `${brightPink}`
        }}
      >
      <ParticleComponent />
      <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
        >
        <Switch>
          <Route path="/" exact>
            <Start />
          </Route>
          <Route path="/create">
            <CreateRoom />
          </Route>
          <Route path="/join">
            <JoinRoom />
          </Route>
          <Route path="/pick">
            <PickSongs />
          </Route>
        </Switch>
        </div>
        </div>
    </Router>
    </div>
  );
}

export default App;
