import Logo from '../assets/sz.png';
import { FaBars } from 'react-icons/fa';

const NavBar = () => {
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
        <div className='md:hidden'>
            <FaBars />
        </div>

        {/*Mobile menu*/}
          <ul className='hidden'>
            <li>Home</li>
            <li>About Me</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact Me</li>
          </ul>
    </div>
  )
}

export default NavBar;
