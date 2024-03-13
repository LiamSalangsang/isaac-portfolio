import React from 'react';
import Sidenav from './components/Sidenav';
import Main from './components/Main';
import Work from './components/Work';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';

const App = () => {
  return (
    <div className='relative'>
      <div className='absolute inset-0 bg-white/30 opacity-50 z-10'></div>
      <Sidenav />
      <Main />
      <AboutMe />
      <Work />
      <Projects />
    </div>
  );
};

export default App;
