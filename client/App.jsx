import React from "react";
import Login from "./components/Login";
import GameContainer from "./components/GameContainer";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/game" component={GameContainer} />
        <Route path="/" component={Login} exact />
      </Switch>
    </main>
  );
};

export default App;
