import './App.css';
import Categories from './pages/categories/categories';
import Albums from './pages/albums/Albums';
import Navigation from './components/Navigation/Navigation';
import PageHeading from './components/pageHeading/pageHeading';
import Featured from './pages/featured/Featured';
import AlbumDetails from './pages/AlbumDetails/AlbumDetails';


function App() {
  
  var hashes = [
    "hej",
    "Med",
    "Dig"
  ]
  return (
    <>
    <AlbumDetails
    hashes = { hashes }
    heading = "Old Town Road"
    songNum = "12"
    />
    <Navigation/>
    </>
  );
}

export default App;
