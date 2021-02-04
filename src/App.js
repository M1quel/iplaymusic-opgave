import './App.css';
import Categories from './pages/categories/categories';
import Albums from './pages/albums/Albums';
import Navigation from './components/Navigation/Navigation';
import PageHeading from './components/pageHeading/pageHeading';
import Featured from './pages/featured/Featured';
import AlbumDetails from './pages/AlbumDetails/AlbumDetails';
import PlayLists from './pages/Playlists/PlayLists';
import Player from './pages/Player/Player';
import { Router } from '@reach/router';

import Login from "./pages/Login/Login";
import Callback from "./pages/Callback/Callback";
import './App.css';
import TokenContext from "./TokenContext";
import { useState } from "react";
import "./darkmode.css";

function App() {
  var tokenState = useState(null);
  return (
    <TokenContext.Provider value={tokenState}>
      <Router>
        <Login default />
        <Albums path="/albums"/>
        <Callback path="/callback" />
        <Featured path="/featured" />
        <Categories path ="/categories" />
        <PlayLists path="/playlists/:id"/>
        <AlbumDetails path="/albumDetails/:id"/> 
        <AlbumDetails path="/albumDetails/:type/:id"/> 
        <PlayLists path="/user"/>
        <PlayLists path="/user/:id"/>
      </Router>
      <Navigation/>
    </TokenContext.Provider>
  );
}

export default App;
