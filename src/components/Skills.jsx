import HTML from '../assets/html.svg'
import CSS from '../assets/css.svg'
import PostgreSql from '../assets/postgresql.svg'
import JS from '../assets/js.svg'
import ReactJs from '../assets/react.svg'
import Ruby from '../assets/ruby.svg'
import Git from '../assets/git.svg'
import Visual_studio_code from '../assets/visual.svg'

const Skills = () => {
  return (
    <div name='skills' className="w-full h-screen bg-gradient-to-r from-rose-100 to-teal-100 font-[Kanit] text-[#d18282]">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-12">
            <div>
              <p className="text-4xl font-bold inline border-b-4 border-red-700 text-red-500">Skills</p>
              <p className="py-4">Some technologies I have worked with: </p>
            </div>  

            <div className="w-full py-8 text-center grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">HTML</p>
                  <img className="w-20 mx-auto mb-2" src={HTML} alt="html"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">CSS</p>
                  <img className="w-20 mx-auto mb-2" src={CSS} alt="css"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">Ruby</p>
                  <img className="w-20 mx-auto mb-2" src={Ruby} alt="ruby"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">JavaScript</p>
                  <img className="w-20 mx-auto mb-2" src={JS} alt="javascript"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">ReactJs</p>
                  <img className="w-20 mx-auto mb-2" src={ReactJs} alt="react"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">Material-ui</p>
                  <img className="w-20 mx-auto mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"  alt="material-ui"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">Bootstarp</p>
                  <img className="w-20 mx-auto mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"  alt="bootstrap"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">PostgreSql</p>
                  <img className="w-20 mx-auto mb-2" src={PostgreSql} alt="postgresql"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">SQLite</p>
                  <img className="w-20 mx-auto mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="sqlite"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">Git</p>
                  <img className="w-20 mx-auto mb-2" src={Git} alt="git"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">Visual Studio Code</p>
                  <img className="w-20 mx-auto mb-2" src={Visual_studio_code} alt="visual-studio"></img>
                </div>
                <div className='shadow-md hover:scale-110 duration-300'>
                  <p className="text-red-500 font-semibold pb-2">GitHub</p>
                  <img className="w-20 mx-auto mb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github"></img>
                </div>
            </div>
            <div>
              <p className="py-4">To see more skills visit my <a className="underline underline-offset" href="https://github.com/sigii1992" target='_blank'>Github profile</a>.</p>
            </div>  
        </div>
    </div>
  );
};

export default Skills;