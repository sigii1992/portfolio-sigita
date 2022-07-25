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
    <div name='skills' className="bg-gradient-to-r from-rose-100 to-teal-100 font-[Kanit] text-[#d18282]">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-12">
            <div>
              <p className="text-4xl font-bold inline border-b-4 border-red-700 text-red-500">Skills</p>
              <p className="py-4">Some technologies I have worked with: </p>
            </div>  

            <div className="w-full py-8 text-center grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <img className="w-20 mx-auto pb-2" src={HTML} alt="html"></img>
                  <p className="text-red-500 font-semibold">HTML</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src={CSS} alt="css"></img>
                  <p className="text-red-500 font-semibold">CSS</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src={Ruby} alt="ruby"></img>
                  <p className="text-red-500 font-semibold">Ruby</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src={JS} alt="javascript"></img>
                  <p className="text-red-500 font-semibold">JavaScript</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src={ReactJs} alt="react"></img>
                  <p className="text-red-500 font-semibold">ReactJs</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"  alt="material-ui"></img>
                  <p className="text-red-500 font-semibold">Material-ui</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"  alt="bootstrap"></img>
                  <p className="text-red-500 font-semibold">Bootstarp</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src={PostgreSql} alt="postgresql"></img>
                  <p className="text-red-500 font-semibold">PostgreSql</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" alt="sqlite"></img>
                  <p className="text-red-500 font-semibold">SQLite</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src={Git} alt="git"></img>
                  <p className="text-red-500 font-semibold">Git</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src={Visual_studio_code} alt="visual-studio"></img>
                  <p className="text-red-500 font-semibold">Visual Studio Code</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="github"></img>
                  <p className="text-red-500 font-semibold">GitHub</p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;