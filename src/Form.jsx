import { Instagram, Linkedin, X, Youtube, Facebook, Ghost } from "lucide-react";

const Form = () => {
  return (
    <section className="w-full flex justify-center py-12 bg-[#000f21]">
      <div className="lg:w-[60%] w-[95%] flex flex-col    max-w-[1920px]">
        <div className="flex flex-col justify-center mb-8 items-center">
          <p className=" text-white text-[80px] font-bold">Lets Talk</p>
          <div className="w-[1px] text h-24 bg-gray-500"></div>
        </div>

        <div className="lg:flex gap-4   rounded-lg">
          <FormLeft />
          <FormRight />
        </div>
        <BottomDivText />
      </div>
    </section>
  );
};

const FormLeft = () => {
  return (
    <div className="bg-white w-1/2 rounded-3xl p-12">
      <form className="flex flex-col gap-2" action="">
        <div className="lg:flex lg:flex-row flex flex-col  gap-2 items-center">
          <input
            className="border outline-blue-400 lg:w-auto w-full p-4 border-[0,0,0,0.5] rounded-2xl"
            type="text"
            placeholder="Name *"
          />
          <input
            className="border p-4 outline-blue-400  lg:w-auto w-full  border-[0,0,0,0.5] rounded-2xl"
            type="text"
            placeholder="Company *"
          />
        </div>
        <input
          className="border border-[0,0,0,0.5] outline-blue-400 p-4 rounded-2xl"
          type="text"
          placeholder="Email *"
        />
        <select className="border  border-[0,0,0,0.5] outline-blue-400 rounded-2xl p-4 ">
          <option value="">How did you hear about us</option>
        </select>
        <textarea
          className="resize-none rounded-2xl p-4 outline-blue-400 cursor-pointer  border border-[0,0,0,0.5]"
          name=""
          id=""
          cols="5"
          rows="5"
          placeholder="Tell us a bit about your business and what kind of servies you are interested in...."
        ></textarea>
        <button className="h-[64px] text-[20px] text-white font-bold rounded-full bg-[#2927e1]">
          Send Message
        </button>
        <p className=" text-center text-[14px] mx-auto max-w-[330px]">
          By clicking submit, you agree to our{" "}
          <span className="text-[#ce365c] cursor-pointer hover:underline">
            Privacy Policy{" "}
          </span>
          and{" "}
          <span className="text-[#ce365c] cursor-pointer hover:underline">
            Terms & Conditions.
          </span>
        </p>
      </form>
    </div>
  );
};

const BottomDivText = () => {
  return (
    <div className="lg:flex lg:flex-row text-[14px] lg:justify-between lg:py-0 py-6 flex flex-col items-center">
      <p className="text-white">©Zeepho. All Rights Reserved.</p>
      <div className="flex items-center gap-6 py-4 text-white lg:gap-2">
        <p className="hover:text-[#ffffff99] duration-500 cursor-pointer">
          Privacy Policy
        </p>
        <p className="hover:text-[#ffffff99] duration-500 cursor-pointer">
          Terms & Conditions
        </p>
      </div>
    </div>
  );
};

const FormRight = () => {
  return (
    <div className="bg-[#1a2737] w-1/2 flex flex-col gap-4 p-12 rounded-3xl">
      <div>
        <h2 className="lg:text-[24px] text-[18px] font-bold text-[#66d996]">
          Hate Forms?
        </h2>
        <p className="text-white lg:text-[24px] text-[18px]">
          hello@zeepho.com
        </p>
      </div>
      <div>
        <h2 className="lg:text-[24px] text-[18px] font-bold text-[#66d996]">
          Phone
        </h2>
        <p className="text-white lg:text-[24px] text-[18px]">+1 123 456 7890</p>
      </div>
      <div>
        <h2 className="lg:text-[24px] text-[18px] font-bold text-[#66d996]">
          Address
        </h2>
        <p className="text-white lg:text-[24px] text-[18px]">
          447 Broadway,
          <br /> New York, Ny, 10012 <br /> United States
        </p>
      </div>
      <Socials />
    </div>
  );
};

const Socials = () => {
  return (
    <div className="py-12">
      <h2 className="lg:text-[24px] text-[18px] font-bold text-[#66d996]">
        Social
      </h2>
      <div className="lg:flex lg:flex-row grid grid-cols-4 cursor-pointer max-lg:w-fit  items-center gap-4">
        <Instagram color="grey" />
        <Ghost color="grey" />
        <Linkedin color="grey" />
        <X color="grey" />
        <Youtube color="grey" />
        <Facebook color="grey" />
      </div>
    </div>
  );
};

export { Form };
