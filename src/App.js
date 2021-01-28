import './App.css';
import Categories from './pages/categories/categories';
import Albums from './pages/albums/Albums';
import Navigation from './components/Navigation/Navigation';
import PageHeading from './components/pageHeading/pageHeading';
import Featured from './pages/featured/Featured';

import { Router } from "@reach/router";
import Login from "./pages/Login/Login";
import Callback from "./pages/Callback/Callback";
import './App.css';
import TokenContext from "./TokenContext";
import { useState } from "react";

function App() {
  var tokenState = useState(null);
  return (
    <TokenContext.Provider value={tokenState}>
      <Router>
        <Login default />
        <Callback path="/callback" />
        <Featured path="/featured" />
        <Categories path ="/find" />
      </Router>
      <Navigation/>
    </TokenContext.Provider>
  );
}

export default App;
