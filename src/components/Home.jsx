import { BsArrowRight } from 'react-icons/bs'

const Home = () => {
  return (
    <div name='home' className="w-full h-screen bg-gradient-to-r from-rose-100 to-teal-100 font-[Kanit]">

    {/*Container */}
        <div className="max-w-[1000px] mx-auto px-12 flex flex-col justify-center h-full">
          <p className="text-red-500 drop-shadow-lg">Hi, my name is</p>
          <h1 className="text-[#BC8F8F] text-4xl md:text-6xl font-bold drop-shadow-lg">Sigita Zebrauskaite</h1>
          <h2 className="text-[#d18282] text-4xl md:text-6xl font-bold drop-shadow-lg">A passionate Junior Full Stack Developer from Lithuania 🇱🇹 living in the UK 🇬🇧</h2>
          <p className="text-[#BC8F8F] py-6 max-w-[1000px] drop-shadow-lg">I'm an ambitious and dedicated Junior Full Stack Developer, 
          looking for a role where I can share my experience and expand my programming knowledge in a supportive and junior-friendly environment.
           I have recently completed <a  className="underline underline-offset"
          href="https://makers.tech/software-developer-career/?utm_source=google&utm_medium=cpc&utm_campaign=B2C+Hybrid&utm_term=makers%20academy&utm_campaign=B2C+Hybrid&utm_source=adwords&utm_medium=ppc&hsa_acc=7172166340&hsa_cam=13568953605&hsa_grp=123027501759&hsa_ad=528554003929&hsa_src=g&hsa_tgt=aud-451474068443:kwd-315575993965&hsa_kw=makers%20academy&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw_b6WBhAQEiwAp4HyIObdX-1eqlnRcn24t7yhBSUufJgNQAMUJnYKvnXQd_TpBN2vqSe8VBoChacQAvD_BwE">Makers Academy</a>, an immersive 16 week software development bootcamp where I strengthened my previous coding knowledge to the level
           where I can proudly say that I am ready for my first role in tech industry.</p>
          <div>
              <button className='group text-white border-2 bg-red-500 rounded-full px-6 py-2 flex items-center hover:bg-red-700 hover:scale-110 duration-300'>View Work 
              <span className='group-hover:rotate-90 duration-300'>
              <BsArrowRight className='ml-2'/></span>
              </button>
          </div>
        </div>
    </div>
  )
}

export default Home;