import React from "react"
import { Route, Switch } from "react-router-dom"
// import Card from "./components/Card"
// import useFetchData from "./Hooks/FetchData"
import {Home, Detail} from "./Pages"

function App() {


  return (
    <>
    <Switch>

      <Route exact path = "/">
          <Home></Home>
      </Route>

      <Route exact path = "/detail/:clubId">
          <Detail></Detail>
      </Route>

    </Switch>
    </>
  );
}

export default App;
