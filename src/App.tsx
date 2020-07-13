import React from "react";
import { connect } from "react-redux";
import "./App.css";
import Mainpage from "./Pages/Mainpage/Mainpage";
import { onAdd, onRemove, onDelete } from "./Store/action/action";
import Header from "./Components/Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Orderpage from "./Pages/Orderpage/Orderpage";

function App(props: any) {
  const route = (
    <Switch>
      <Route path="/" exact render={() => <Mainpage {...props} />}></Route>
      <Route path="/basket" render={() => <Orderpage {...props} />}></Route>
      <Redirect to="/" />
    </Switch>
  );
  return (
    <div>
      <Header {...props} />
      {route}
    </div>
  );
}

function mapStateToProps(state: { information: { list: any; basket: any } }) {
  return {
    information: state,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    onAdd: (value: number) => dispatch(onAdd(value)),
    onRemove: (value: number) => dispatch(onRemove(value)),
    onDelete: (value: number) => dispatch(onDelete(value)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
