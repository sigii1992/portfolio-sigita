import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full min-h-screen bg-[#071E22] font-[Kanit]">
      {/*Container */}
      <div className="max-w-[1000px] mx-auto py-20 px-4 sm:px-12 flex flex-col justify-center min-h-screen">
        <p className="text-gray-100">Hi, my name is</p>
        <h1 className="text-[#1D7874] text-4xl sm:text-6xl font-bold">
          Sigita Zebrauskaite
        </h1>
        <h2 className="text-[#68a89a] text-4xl sm:text-6xl font-bold">
          A passionate Junior Full Stack Developer from Lithuania 🇱🇹 living in
          the UK 🇬🇧
        </h2>
        <p className="text-[#B6CDC7] py-6 max-w-[1000px]">
          I'm an ambitious and dedicated Junior Full Stack Developer, looking
          for a role where I can share my experience and expand my programming
          knowledge in a supportive and junior-friendly environment. I have
          recently completed{" "}
          <a
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset"
            href="https://makers.tech/software-developer-career/?utm_source=google&utm_medium=cpc&utm_campaign=B2C+Hybrid&utm_term=makers%20academy&utm_campaign=B2C+Hybrid&utm_source=adwords&utm_medium=ppc&hsa_acc=7172166340&hsa_cam=13568953605&hsa_grp=123027501759&hsa_ad=528554003929&hsa_src=g&hsa_tgt=aud-451474068443:kwd-315575993965&hsa_kw=makers%20academy&hsa_mt=e&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw_b6WBhAQEiwAp4HyIObdX-1eqlnRcn24t7yhBSUufJgNQAMUJnYKvnXQd_TpBN2vqSe8VBoChacQAvD_BwE"
          >
            Makers Academy
          </a>
          , an immersive 16 week software development bootcamp where I
          strengthened my previous coding knowledge to the level where I can
          proudly say that I am ready for my first role in tech industry.
        </p>
        <div>
          <Link to="projects" smooth={true} duration={500} offset={-80}>
            <button className="group text-[#071E22] bg-gray-200 rounded-full px-6 py-2 flex items-center hover:bg-[#68a89a] hover:scale-110 duration-300">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <BsArrowRight className="ml-2" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
