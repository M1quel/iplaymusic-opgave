import { Router } from '@reach/router';
import './App.css';
import FeaturedCard from './components/FeaturedCards/FeaturedCard';
import Navigation from './components/Navigation/Navigation';
import Featured from './pages/featured/Featured';

function App() {
  return (
    <>
    <Router>
      <Featured path="/"/>

    </Router>
    <Navigation/>
    </>
  );
}

export default App;
