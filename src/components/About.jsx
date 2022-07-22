
const About = () => {
  return (
    <div name='about' className="w-full h-screen bg-gradient-to-r from-rose-100 to-teal-100 font-[Kanit] text-[#d18282]">
        <div className="flex flex-col justify-items-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8">
                <div className="md:text-right pb-8 pl-12">
                  <p className="text-4xl font-bold inline border-b-4 border-red-700 text-red-500">About me</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-12">
                <div className="md:text-right text-4xl font-bold">
                  <p>Hi, I'm Sigita and welcome to my portfolio!</p>
                </div>
                <div>
                  <p className="text-[#BC8F8F]">Over the last 6 years living in UK, working through multiple different jobs and industries, trying to figure out which path to follow, I learned a lot about myself - that I have a good attention to detail, that I'm very determined and focused as well as a great team player. These factors and constant research ultimately led me to what I really enjoy, which is coding. I love coding and I love the feeling after you complete a challenge or a project you were working on for a period of time. I would like to think I have enough discipline which makes it easier for me to keep learning something new every day. Although, there are some days when I feel frustrated, I do not give up and this offers me motivation to carry on.</p>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default About;