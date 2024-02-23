import { ChevronDown } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full flex justify-center py-8">
      <div className="lg:w-[29%] w-[90%] max-w-[1920px]">
        <div className="flex justify-center items-center p-3 rounded-2xl bg-[#1a2737]">
          <NavBar />
        </div>
      </div>
    </header>
  );
};

const NavBar = () => {
  return (
    <nav className=" w-full  relative flex justify-between items-center rounded-lg bg-white p-3">
      <p className="text-[#000f21] font-bold">Zeepho</p>
      <NavRight />
      <div className="absolute cursor-pointer -right-1 top-0 font-semibold rounded-full flex justify-center items-center w-5 h-5 text-white bg-[#a470f7]">
        0
      </div>
    </nav>
  );
};

const NavRight = () => {
  return (
    <div className="flex gap-3 items-center">
      <p className="flex items-center cursor-pointer font-semibold text-[14px]">
        Menu <ChevronDown size={15} />
      </p>
      <p className="font-semibold cursor-pointer text-[14px]">Cart</p>
    </div>
  );
};

export { Header };
