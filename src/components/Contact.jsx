import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center bg-gradient-to-r from-rose-100 to-teal-100 font-[Kanit] text-[#d18282]"
    >
      <form
        method="POST"
        action="https://getform.io/f/f4bac19f-ca10-4e1e-95c6-10f76e21f994"
        className="max-w-[600px] flex flex-col w-full px-4 sm:px-12 py-20 md:pt-0"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-red-700 text-red-500">
            Contact me
          </p>
          <p className="pt-10">
            Submit the form below or send me an email - sigita.zeb92@gmail.com
          </p>
        </div>
        <input
          type="text"
          placeholder="Enter your name"
          name="name"
          className="shadow-lg p-2 shadow-red-700 rounded-lg placeholder-[#d18282] text-red-500 outline-none"
        />
        <input
          type="email"
          placeholder="Enter your email address"
          name="email"
          className="my-4 shadow-lg p-2 shadow-red-700 rounded-lg placeholder-[#d18282] text-red-500 outline-none"
        />
        <textarea
          rows="10"
          name="message"
          placeholder="Enter your message..."
          className="shadow-lg p-2 shadow-red-700 rounded-lg placeholder-[#d18282] text-red-500 outline-none"
        ></textarea>
        <button className="mx-auto my-8 text-white border-2 bg-red-500 rounded-full px-6 py-2 flex items-center justify-center hover:bg-red-700 hover:scale-110 duration-300">
          Let's talk!
          <MdEmail className="ml-2" />{" "}
        </button>
      </form>
    </div>
  );
};

export default Contact;
