import './App.css';

import CookieSection from './components/CookieSection';
import FixedWhatsappButton from './components/FixedWhatsappButton';
import DiscountRibbon from './components/DiscountRibbon';
import HeroSection from './components/HeroSection';
import NumbersSection from './components/NumbersSection';
import OneStopSolution from './components/OneStopSolution';
import OurProducts from './components/OurProducts';
import TrustedBySection from './components/TrustedBySection';
import NextLevelSection from './components/NextLevelSection';
import HowItWorks from './components/HowItWorks';
import IndustriesSection from './components/IndustriesSection';
import GetStartedToday from './components/GetStartedToday';
import VideoSection from './components/VideoSection';
import GrowFasterSection from './components/GrowFasterSection';
import BlogsSection from './components/BlogsSection';
import MainFooter from './components/MainFooter';
import SecondFooter from './components/SecondFooter';

function App() {
  return (
    <div className="App">
      <CookieSection />
      <FixedWhatsappButton />
      <DiscountRibbon />
      <HeroSection />
      <NumbersSection />
      <div className='bg-light'>
        <OneStopSolution />
        <OurProducts />
      </div>
      <TrustedBySection />
      <NextLevelSection />
      <HowItWorks />
      <IndustriesSection />
      <GetStartedToday />
      <VideoSection />
      <GrowFasterSection />
      <BlogsSection />
      <MainFooter />
      <SecondFooter />
    </div>
  );
}

export default App;
