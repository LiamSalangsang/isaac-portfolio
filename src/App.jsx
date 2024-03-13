import React from 'react'
import Sidenav from './components/Sidenav'
import Main from './components/Main'
import Work from './components/Work'
import Projects from './components/Projects'
import AboutMe from './components/AboutMe'

const App = () => {
  return (
    <div>
  <Sidenav/>
    <Main/>
    <AboutMe></AboutMe>
    <Work/>
    <Projects/>


    </div>
  )
}

export default App