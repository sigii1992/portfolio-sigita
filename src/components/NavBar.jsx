import { useState } from 'react';
import Logo from '../assets/sz.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { BsLinkedin, BsGithub } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'

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
            { hamburgerMenu ? <FaTimes size={38} /> : <FaBars size={38}/> }
        </div>

        {/*Mobile menu*/}
          <ul className={hamburgerMenu ? 'absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-rose-500 via-red-400 to-red-500 flex flex-col justify-center items-center' : 'hidden'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About Me</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Projects</li>
            <li className='py-6 text-4xl'>Contact Me</li>
          </ul>

        {/*Social media icons*/}
        <div className='hidden md:flex fixed flex-col top-[35%] left-0 text-red-500 drop-shadow-lg'>
            <ul>
              <li className='w-[195px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full' href="https://www.linkedin.com/in/sigita-zebrauskaite-0258ab15b/" target='_blank'rel="noreferrer">Linkedin<BsLinkedin size={40}/></a>
              </li>
              <li className='w-[195px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full' href="https://github.com/sigii1992" target='_blank' rel="noreferrer">GitHub<BsGithub size={40}/></a>
              </li>
              <li className='w-[195px] h-[60px] flex justify-between items-center ml-[-130px] hover:ml-[-10px] duration-300'>
                <a className='flex justify-between items-center w-full' href="mailto: sigita.zeb92@gmail.com" target='_blank' rel="noreferrer">Email<MdEmail size={40}/></a>
              </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar;
