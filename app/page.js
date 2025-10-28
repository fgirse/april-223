import { Footer, InfoBar  } from '../components/';
import { About, Bento , Wohin, Event, Hero, Drinks, Team, Sportarena, World } from '../sections';
import Navigation from '../components/Navbar.tsx';
import ScrollToTop, { ScrollTop } from'../components/BackToTop/ScrollToTop.js';


const Page = () => (
  <>

  <div className="bg-primary-black overflow-hidden flex-col">
    <Navigation />  
    <InfoBar/> 
    <div className='flex-grow'>
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0"></div>
      <Bento />
    </div>
    <div className="relative">
      <Drinks />
      <ScrollToTop/>
      <div className="gradient-04 z-0"></div>
      <Event />
    </div>
    <Sportarena />
    <div className="relative">
       <Team/>
      <div className="gradient-04 z-0"></div>
      <Wohin />
    </div>
    <ScrollToTop/>    
     </div>
   
    <Footer />
  </div>
  </>
);
export default Page
