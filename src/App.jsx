import { useState } from 'react'
import LandingPage from './templates/Landing';
import Navbar from './templates/Navbar';
import Home from './templates/Home';
import Skills from './templates/Skills';
import Experience from "./templates/Experience";
import Services from './templates/Services';
import Projects from './templates/Projects';
import Contact from './templates/Contact';
import Sidebar from './templates/Sidebar';
import wheel from "./images/profile-logos/pngwing.com.png"


function App() {

  const [isLanding,setIsLanding] = useState(true);

  return (
    <div className="App">
      {isLanding ? <LandingPage setIsLanding={setIsLanding} /> : (
        <>
          <Navbar />
          <Home />
          <Skills wheel={wheel}/>
          <Experience wheel={wheel}/>
          <Services wheel={wheel}/>
          <Projects wheel={wheel}/>
          <Contact wheel={wheel}/>
          <Sidebar />
        </>
      )}
    </div>
  )
}

export default App
