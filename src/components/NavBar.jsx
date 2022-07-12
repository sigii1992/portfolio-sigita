import Logo from '../assets/sz.png'

const NavBar = () => {
  return (
    <div className="bg-gradient-to-r from-rose-500 via-red-400 to-red-500 fixed w-full h-[80px] flex justify-between items-center px-4 text-white">
        <div>
            <img src={Logo} alt='Logo' style={{width: '110px'}}></img>
        </div>
        <div>
            <ul className='flex'>
              <li>Home</li>
              <li>About Me</li>
              <li>Skills</li>
              <li>Projects</li>
              <li>Contact Me</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar;
