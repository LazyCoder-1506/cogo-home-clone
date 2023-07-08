import './App.css';

import CookieSection from './components/CookieSection';
import NumbersSection from './components/NumbersSection';
import OneStopSolution from './components/OneStopSolution';
import OurProducts from './components/OurProducts';
import TrustedBySection from './components/TrustedBySection';
import IndustriesSection from './components/IndustriesSection';
import GetStartedToday from './components/GetStartedToday';

function App() {
  return (
    <div className="App">
      <CookieSection />
      <NumbersSection />
      <div className='bg-light'>
        <OneStopSolution />
        <OurProducts />
      </div>
      <TrustedBySection />
      <IndustriesSection />
      <GetStartedToday />
    </div>
  );
}

export default App;
