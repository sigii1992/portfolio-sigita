import { BsArrowRightCircleFill } from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-gradient-to-r from-rose-100 to-teal-100 font-[Kanit]">

    {/*Container */}
        <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full">
          <p className="text-2xl">Hi, my name is</p>
          <h1 className="font">Sigita Zebrauskaite</h1>
          <h2>A passionate Junior Full Stack Developer from Lithuania 🇱🇹 living in the UK 🇬🇧</h2>
          <p>I'm an ambitious and dedicated Junior Full Stack Developer, 
          looking for a role where I can share my experience and expand my programming knowledge in a supportive and junior-friendly environment.
           I have recently completed Makers Academy, an immersive 16 week software development bootcamp where I strengthened my previous coding knowledge to the level
           where I can proudly say that I am ready for my first role in this industry.</p>
          <div>
              <button>View Work <BsArrowRightCircleFill /></button>
          </div>
        </div>
    </div>
  )
}

export default Home;