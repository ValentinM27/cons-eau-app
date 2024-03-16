import { Home } from "@pages/Home";
import { Login } from "@pages/Login";
import { Route, Router } from "wouter";

export const RouterView = () => {
  return (
    <Router>
      <Route path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
    </Router>
  );
};
