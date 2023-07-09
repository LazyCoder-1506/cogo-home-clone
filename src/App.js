import './App.css';

import CookieSection from './components/CookieSection';
import NumbersSection from './components/NumbersSection';
import OneStopSolution from './components/OneStopSolution';
import OurProducts from './components/OurProducts';
import TrustedBySection from './components/TrustedBySection';
import NextLevelSection from './components/NextLevelSection';
import IndustriesSection from './components/IndustriesSection';
import GetStartedToday from './components/GetStartedToday';
import VideoSection from './components/VideoSection';
import GrowFasterSection from './components/GrowFasterSection';
import BlogsSection from './components/BlogsSection';
import MainFooter from './components/MainFooter';

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
      <NextLevelSection />
      <IndustriesSection />
      <GetStartedToday />
      <VideoSection />
      <GrowFasterSection />
      <BlogsSection />
      <MainFooter />
    </div>
  );
}

export default App;
