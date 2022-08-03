import HTML from "../assets/html.svg";
import CSS from "../assets/css.svg";
import PostgreSql from "../assets/postgresql.svg";
import JS from "../assets/js.svg";
import ReactJs from "../assets/react.svg";
import Ruby from "../assets/ruby.svg";
import Git from "../assets/git.svg";
import Visual_studio_code from "../assets/visual.svg";
import Github from "../assets/github.svg";

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#071E22] font-[Kanit] text-[#B6CDC7]  bg-cl"
    >
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full px-4 sm:px-12 py-20 md:pt-0">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#68a89a] text-gray-100">
            Skills
          </p>
          <p className="pt-10 pb-8">
            Some of the technologies I have worked with:
          </p>
        </div>

        <div className="w-full pb-6 text-center grid grid-cols-2 md:grid-cols-4 gap-4">
          <div
            onClick={() =>
              window.open(
                "https://developer.mozilla.org/en-US/docs/Web/HTML",
                "_blank"
              )
            }
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2 ">HTML</p>
            <img className="w-20 mx-auto mb-2" src={HTML} alt="html"></img>
          </div>
          <div
            onClick={() =>
              window.open(
                "https://developer.mozilla.org/en-US/docs/Web/CSS",
                "_blank"
              )
            }
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">CSS</p>
            <img className="w-20 mx-auto mb-2" src={CSS} alt="css"></img>
          </div>
          <div
            onClick={() =>
              window.open("https://www.ruby-lang.org/en/", "_blank")
            }
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">Ruby</p>
            <img className="w-20 mx-auto mb-2" src={Ruby} alt="ruby"></img>
          </div>
          <div
            onClick={() => window.open("https://www.javascript.com/", "_blank")}
            className="rounded-lg shadow-xl shadow-[#1D7874]  hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">JavaScript</p>
            <img className="w-20 mx-auto mb-2" src={JS} alt="javascript"></img>
          </div>
          <div
            onClick={() => window.open("https://reactjs.org/", "_blank")}
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">ReactJs</p>
            <img className="w-20 mx-auto mb-2" src={ReactJs} alt="react"></img>
          </div>
          <div
            onClick={() => window.open("https://mui.com/", "_blank")}
            className="rounded-lg shadow-xl shadow-[#1D7874]  hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">Material-ui</p>
            <img
              className="w-20 mx-auto mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              alt="material-ui"
            ></img>
          </div>
          <div
            onClick={() => window.open("https://getbootstrap.com/", "_blank")}
            className="rounded-lg shadow-xl shadow-[#1D7874]  hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">Bootstarp</p>
            <img
              className="w-20 mx-auto mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="bootstrap"
            ></img>
          </div>
          <div
            onClick={() => window.open("https://www.postgresql.org/", "_blank")}
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">PostgreSql</p>
            <img
              className="w-20 mx-auto mb-2"
              src={PostgreSql}
              alt="postgresql"
            ></img>
          </div>
          <div
            onClick={() =>
              window.open("https://www.sqlite.org/index.html", "_blank")
            }
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">SQLite</p>
            <img
              className="w-20 mx-auto mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg"
              alt="sqlite"
            ></img>
          </div>
          <div
            onClick={() => window.open("https://git-scm.com/", "_blank")}
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">Git</p>
            <img className="w-20 mx-auto mb-2" src={Git} alt="git"></img>
          </div>
          <div
            onClick={() =>
              window.open("https://code.visualstudio.com/", "_blank")
            }
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">
              Visual Studio Code
            </p>
            <img
              className="w-20 mx-auto mb-2"
              src={Visual_studio_code}
              alt="visual-studio"
            ></img>
          </div>
          <div
            onClick={() => window.open("https://github.com/", "_blank")}
            className="rounded-lg shadow-xl shadow-[#1D7874] hover:scale-110 duration-300"
          >
            <p className="text-[#B6CDC7] font-semibold pb-2">GitHub</p>
            <img
              className="pt-7 sm:pt-0 w-20 mx-auto mb-2"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="github"
            ></img>
          </div>
        </div>
        <div>
          <p className="py-4">
            To know more about my technical and soft skills please visit my{" "}
            <a
              className="underline underline-offset"
              href="https://github.com/sigii1992"
              target="_blank"
              rel="noreferrer"
            >
              Github profile
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
