import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import history from "../history";
import Header from "./Header";
import BookStore from "./Pages/BookStore/BookStore";
import Home from "./Pages/Home";
import LocalState from "./Pages/LocalState";
import PropDrilling from "./Pages/PropDrilling";
import Todos from "./Pages/Todos/Todos";

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Header />
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/local-state" exact element={<LocalState />} />
            <Route path="/props-drilling" exact element={<PropDrilling />} />
            <Route path="/recoil" exact element={<BookStore />} />
            <Route path="/recoil-optimization" exact element={<Todos />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
