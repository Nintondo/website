import './App.css';
import Text from './components/Text/Text';
// import Footer from './components/Footer/Footer.tsx';
import { useEffect, useState } from 'react';
import About from './components/About/About.tsx';
import Download from './components/Download/Download.tsx';
import Community from './components/Community/Community.tsx';
import { Markets } from './components/Markets/Markets.tsx';
import PageLinks from './components/PageLinks/PageLinks.tsx';
import DownChevron from './components/Icons/DownChevron/DownChevron.tsx';

const App = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='App'>
      <div
        className={'app-container bg-black pt-[200px] px-[24px] snap-y sm:bg-[length:auto_100vh] lg:bg-[length:100vw_1380px]'}
        style={{ backgroundPosition: `center -${scrollY + 10}px`}}
      >
          <div className='sm:mb-[40vh] lg:mb-24'>
            <Text />
          </div>
          <PageLinks />
          <div className="lg:hidden sticky flex justify-center bottom-[48px]" style={{opacity: 1 - scrollY  / 100}}>
            <DownChevron /> 
          </div>
          <About />
          <Download />
          <Markets />
          <Community/>
      </div>
      <div className={'bg-black pt-[30px] h-full'}>
        <div className={'w-[100%] mx-auto'}>
          <div className='w-full h-full border border-white'></div>
          <div className='flex flex-col justify-center'>
            <div className='text-center text-white text-4xl pt-[50px] pb-[30px] font-extrabold break-words'>
              NINTONDO.IO
            </div>
            <button className='mb-[44px]' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
              <p className='text-center text-white'>
                Back to Top ^
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default App;
