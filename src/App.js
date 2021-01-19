import './App.css';
import Navigation from './components/Navigation/Navigation';
import SecondaryNavigation from './components/secondaryNavigation/SecondartNavigation';

function App() {
  return (
    <>
    <SecondaryNavigation
    arrow="block"
    heading="Page name"
    search="block"
    />
    <Navigation/>
    </>
  );
}

export default App;
