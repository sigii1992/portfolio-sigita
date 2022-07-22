

const Skills = () => {
  return (
    <div name='skills' className="bg-gradient-to-r from-rose-100 to-teal-100 font-[Kanit] text-[#d18282]">
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-12">
            <div>
              <p className="text-4xl font-bold inline border-b-4 border-red-700 text-red-500">Skills</p>
              <p className="py-4">These are the technologies I have worked with: </p>
            </div>  

            <div className="w-full py-8 text-center grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <img className="w-20 mx-auto pb-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby"></img>
                  <p className="text-red-500 font-semibold">Ruby</p>
                </div>
                <div>
                  <img className="w-20 mx-auto pb-2" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html"></img>
                  <p className="text-red-500 font-semibold">HTML</p>
              </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;