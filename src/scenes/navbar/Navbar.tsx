import './navbar.css'
import { SelectedPage } from "../../shared/types";
import useMediaQuery from "../../hooks/useMediaQuery";
import Links from "./Links";
// import { useState } from 'react';

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  // const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
const navbarBackground = isTopOfPage ? "top-nav-container" : "nav-container"

  return (
    <nav className={navbarBackground}>


      <div className='logo'>
        <div className='logo'>Nati Peretz</div>
        <div className='logo2'>Web Developer</div>
      </div>

 {isAboveMediumScreens ? (
    <div className='links-wrap'>
      <Links
        page="Welcome"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Links
        page="About Me"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Links
        page="Projects"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Links
        page="Contact Me"
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />

      
      </div>
 ) : (
  <button className='menu-btn'>
    <i className="bi bi-list menu-icon"/>
  </button>
 )}
    
    </nav>
  );
};

export default Navbar;
