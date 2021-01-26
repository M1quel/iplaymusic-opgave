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


function App() {

  var playlists = [
    {
      "id": "156452",
      "playlistName": "Top 50 Rock Ballads",
      "playListImg": "https://via.placeholder.com/200",
      "songs": [
        {
          "heading": "Old Town Road",
          "artist": "Billy Ray Cyrus",
          "playTime": "3:58"
        },
        {
          "heading": "Old Town Road",
          "artist": "Billy Ray Cyrus",
          "playTime": "3:58"
        },
        {
          "heading": "Old Town Road",
          "artist": "Billy Ray Cyrus",
          "playTime": "3:58"
        }
      ]
    },
    {
      "id": "5454852",
      "playlistName": "Top 100 Songs",
      "playListImg": "https://via.placeholder.com/200",
      "songs": [
        {
          "heading": "Ur mom",
          "artist": "Ur dad",
          "playTime": "2:00"
        },
        {
          "heading": "Old Town Road",
          "artist": "Billy Ray Cyrus",
          "playTime": "3:58"
        },
        {
          "heading": "Old Town Road",
          "artist": "Billy Ray Cyrus",
          "playTime": "3:58"
        }
      ]
    }
    
  ]
  return (
    <>
    <Router>
      <Featured path="/"/>
      <Player path="/player"
      heading="Hej med dig"
      artist="Hej med dig 2"
      artistImg="https://via.placeholder.com/300"
      songSrc= "./testSong.flac"
      bgImg="https://via.placeholder.com/400x800"
      songDuration="3:50"
      />
      <Categories path="/find"/>
    </Router>
    <Navigation/>
    </>
  );
}

export default App;
