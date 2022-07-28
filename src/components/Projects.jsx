

const Projects = () => {
  return (
    <div name='projects' className="w-full min-h-screen bg-gradient-to-r from-rose-100 to-teal-100 font-[Kanit] text-[#d18282]">

    {/*Container */}
        <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full px-4 sm:px-12 pb-20">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-red-700 text-red-500">Projects</p>
            <p className="pt-10">Check out some of my recent projects: </p>
            <p className="text-lg pb-8">(P.S. You can see application screenshots when following the Github link on every project 🖱)</p>
          </div> 

          {/*Grid container */}
          <div className="grid sm:grid-cols-2 gap-4">
          {/*Card container */}
              <div className="shadow-lg shadow-red-700 container card-content-div">
                  bla bla 
              </div>
              <div className="shadow-lg shadow-red-700 container card-content-div">
                  bla bla 
              </div>
              <div className="shadow-lg shadow-red-700 container card-content-div">
                  bla bla 
              </div>
              <div className="shadow-lg shadow-red-700 container card-content-div">
                  bla bla 
              </div>
              <div className="shadow-lg shadow-red-700 container card-content-div">
                  bla bla 
              </div>
          </div>
        </div>
    </div>
  )
}

export default Projects