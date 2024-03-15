import { Route, Router } from "wouter";
import { Home } from "@pages/Home";

export const RouterView = () => {
  return (
    <Router base="/">
      <Route path="/" component={Home}></Route>
    </Router>
  );
};
