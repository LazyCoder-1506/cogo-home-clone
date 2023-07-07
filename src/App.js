import './App.css';

import CookieSection from './components/CookieSection';
import OurProducts from './components/OurProducts';

function App() {
  return (
    <div className="App">
      <div className='bg-light'>
        <OurProducts />
      </div>
      <CookieSection />
    </div>
  );
}

export default App;
