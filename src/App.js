import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./components/navBar";
import ExpenseList from "./components/expenseList";
import CreateExpense from "./components/createExpense";
import Home from "./components/home";
import Notfound from "./components/notfound";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/">
              <Home />
            </Route>  
          <Route path="/expense" component={ExpenseList} />
          <Route path="/:id" component={CreateExpense} />
          <Route path="/not-found" component={Notfound} /> 
          <Redirect to="not-found" />
        </Switch>
      </div>
    );
  }
}

export default App;
