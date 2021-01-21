import { Router } from '@reach/router';
import './App.css';
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
