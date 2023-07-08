import './App.css';

import CookieSection from './components/CookieSection';
import NumbersSection from './components/NumbersSection';
import OneStopSolution from './components/OneStopSolution';
import OurProducts from './components/OurProducts';

function App() {
  return (
    <div className="App">
      <NumbersSection />
      <div className='bg-light'>
        <OneStopSolution />
        <OurProducts />
      </div>
      <CookieSection />
    </div>
  );
}

export default App;
