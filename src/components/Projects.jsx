import Lights_out from "../assets/light-out.jpg";
import Chitter from "../assets/chitter.webp";
import Acebook from "../assets/ace.jpg";
import Bank_tech_test from "../assets/coding.png";
import Meme from "../assets/meme.png";

const Projects = () => {
  return (
    <div
      name="projects"
      className="w-full min-h-screen bg-[#071E22] font-[Kanit] text-[#B6CDC7]"
    >
      {/*Container */}
      <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full px-4 sm:px-12 py-20 md:pt-0">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#68a89a] text-gray-100">
            Projects
          </p>
          <p className="pt-10">Check out some of my recent projects: </p>
          <p className="text-lg pb-8">
            (P.S. You can look at application screenshots when clicking the
            "Code" button on every project 🖱)
          </p>
        </div>

        {/*Grid container */}
        <div className="grid sm:grid-cols-2 gap-4">
          {/*Grid Item*/}
          <div
            style={{ backgroundImage: `url(${Lights_out})` }}
            className="group shadow-xl shadow-[#1D7874] container mx-auto card-content-div"
          >
            {/*Hover efect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold text-4xl text-[#1D7874] tracking-wider">
                Lights-out!
              </span>
              <div className="pt-6 text-center">
                <a
                  href="https://github.com/sigii1992/lights-out"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-gray-200 text-[#071E22] font-bold hover:bg-[#68a89a] hover:scale-110 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Chitter})` }}
            className="group shadow-xl shadow-[#1D7874] container mx-auto card-content-div"
          >
            {/*Hover efect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold text-4xl text-[#1D7874] tracking-wider">
                Chitter
              </span>
              <div className="pt-6 text-center">
                <a
                  href="https://github.com/sigii1992/Chitter-challenge2"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-gray-200 text-[#071E22] font-bold hover:bg-[#68a89a] hover:scale-110 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Bank_tech_test})` }}
            className="group shadow-xl shadow-[#1D7874] container mx-auto card-content-div"
          >
            {/*Hover efect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold text-4xl text-[#1D7874] tracking-wider">
                Bank Tech Test
              </span>
              <div className="pt-6 text-center">
                <a
                  href="https://github.com/sigii1992/bank-tech-test"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-gray-200 text-[#071E22] font-bold hover:bg-[#68a89a] hover:scale-110 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Meme})` }}
            className="group shadow-xl shadow-[#1D7874] container mx-auto card-content-div"
          >
            {/*Hover efect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold text-4xl text-[#1D7874] tracking-wider">
                Meme Generator
              </span>
              <div className="pt-6 text-center">
                <a
                  href="https://github.com/sigii1992/Meme-generator"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-gray-200 text-[#071E22] font-bold hover:bg-[#68a89a] hover:scale-110 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${Acebook})` }}
            className="group shadow-xl shadow-[#1D7874] container mx-auto card-content-div"
          >
            {/*Hover efect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="font-bold text-4xl text-[#1D7874] tracking-wider">
                Acebook
              </span>
              <div className="pt-6 text-center">
                <a
                  href="https://github.com/sigii1992/Acebook-Cloudbursters"
                  target="_blank"
                  rel="noreferrer"
                >
                  <button className="text-center rounded-full px-4 py-3 m-2 bg-gray-200 text-[#071E22] font-bold hover:bg-[#68a89a] hover:scale-110 duration-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
