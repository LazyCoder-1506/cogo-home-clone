import './App.css';

import CookieSection from './components/CookieSection';
import OneStopSolution from './components/OneStopSolution';
import OurProducts from './components/OurProducts';

function App() {
  return (
    <div className="App">
      <div className='bg-light'>
        <OneStopSolution />
        <OurProducts />
      </div>
      <CookieSection />
    </div>
  );
}

export default App;
