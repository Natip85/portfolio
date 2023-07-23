import "./app.css";
import { useEffect, useState } from "react";
import Navbar from "./scenes/navbar/Navbar";
import { SelectedPage } from "./shared/types";
import Home from "./scenes/home/Home";
import About from "./scenes/aboutMe/About";
import Contact from "./scenes/contactMe/Contact";
import Projects from "./scenes/projects/Projects";
import Footer from "./scenes/footer/Footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Welcome);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(()=>{

    const handleScroll = () =>{

      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Welcome)
      }
      if(window.scrollY !== 0) setIsTopOfPage(false)
    }

    window.addEventListener("scroll", handleScroll)
    return ()=>window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage} 
      />

      <div className="app-wrap">
           <Home setSelectedPage={setSelectedPage} />
          <About setSelectedPage={setSelectedPage} />
           <Projects setSelectedPage={setSelectedPage} />
          <Contact setSelectedPage={setSelectedPage} />
          <Footer/>
         
      </div>
    </>
  );
}

export default App;
