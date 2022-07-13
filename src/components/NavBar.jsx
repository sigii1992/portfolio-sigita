import { useState } from 'react';
import Logo from '../assets/sz.png';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);

  const handleClick = () => setHamburgerMenu(!hamburgerMenu);

  return (
    <div className="bg-gradient-to-r from-rose-500 via-red-400 to-red-500 fixed w-full h-[80px] flex justify-between items-center px-4 text-white shadow-xl">
        <div>
            <img src={Logo} alt='Logo' style={{width: '110px'}}></img>
        </div>

        {/*menu: anything below medium it will hide*/}
          <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>

        {/*hamburger: anything over medium (768px) it will hide*/}
        <div onClick={handleClick} className='md:hidden z-10 hover:text-red-700 cursor-pointer drop-shadow-lg'>
            <FaBars size={38}/>
        </div>

        {/*Mobile menu*/}
          <ul className={hamburgerMenu ? 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-rose-500 via-red-400 to-red-500 flex flex-col justify-center items-center' : 'hidden'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About Me</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact Me</li>
          </ul>
    </div>
  )
}

export default NavBar;
