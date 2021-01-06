import React from "react"
import { Provider } from "react-redux";
import { Route, Switch } from "react-router-dom"
import {Home, Detail, Favorite} from "./Pages"
import store from "./store"

function App() {

  return (
    <>
      <Provider store = {store}>
        <Switch>
            <Route exact path = "/">
                <Home></Home>
            </Route>

            <Route exact path = "/favorite">
                <Favorite></Favorite>
            </Route>

            <Route exact path = "/detail/:clubId">
                <Detail></Detail>
            </Route>
        </Switch>
      </Provider>
    </>
  );
}

export default App;
