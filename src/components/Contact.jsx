import { MdEmail } from "react-icons/md";
import { useState } from "react";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen flex justify-center items-center bg-[#071E22] font-[Kanit] text-[#B6CDC7] bg-cl"
    >
      <form
        method="POST"
        action="https://getform.io/f/f4bac19f-ca10-4e1e-95c6-10f76e21f994"
        className="max-w-[600px] flex flex-col w-full px-4 sm:px-12 py-20 md:pt-0"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#68a89a] text-gray-100">
            Contact me
          </p>
          <p className="pt-10">
            Submit the form below and I will get back to you 🖊
          </p>
        </div>
        <input
          value={values.name}
          onChange={handleChange}
          required
          type="text"
          placeholder="Enter your name"
          name="name"
          className="peer shadow-xl p-2 shadow-[#1D7874] rounded-lg placeholder-[#114141] text-[#114141] outline-none"
        />
        <input
          value={values.email}
          onChange={handleChange}
          required
          type="email"
          placeholder="Enter your email address"
          name="email"
          className="my-4 shadow-xl p-2 shadow-[#1D7874] rounded-lg placeholder-[#114141] text-[#114141] outline-none"
        />
        <textarea
          value={values.message}
          onChange={handleChange}
          required
          rows="10"
          name="message"
          placeholder="Enter your message..."
          className="shadow-xl p-2 shadow-[#1D7874] rounded-lg placeholder-[#114141] text-[#114141] outline-none"
        ></textarea>
        <button className="mx-auto my-8 text-[#0f4946] bg-gray-200 rounded-full px-6 py-2 flex items-center justify-center hover:bg-[#68a89a] hover:text-gray-200 hover:scale-110 duration-300">
          Let's talk!
          <MdEmail className="ml-2" />
        </button>
      </form>
    </div>
  );
};

export default Contact;
