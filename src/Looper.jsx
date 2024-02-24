import { TrophyIcon } from "lucide-react";

const Looper = () => {
  return (
    <div className="whitespace-nowrap w-full flex   overflow-hidden p-2  bg-white rounded-lg">
      <div className="logos-slide   flex justify-center items-center ">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <>
              <TrophyIcon className="mx-12" color="yellow" size={50} />
              <p className="text-black font-bold text-[24px]">Services</p>
            </>
          ))}
      </div>
      <div className="logos-slide   flex justify-center items-center ">
        {Array(10)
          .fill(0)
          .map((_, index) => (
            <>
              <TrophyIcon className="mx-12" color="yellow" size={50} />
              <p className="text-black font-bold text-[24px]">Services</p>
            </>
          ))}
      </div>
    </div>
  );
};

export { Looper };
