const Footer = () => {
  return (
    <footer className="w-full flex justify-center  bg-[#000f21]">
      <div className="w-[95%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row lg:justify-between flex flex-col items-center ">
          <p className="text-[#ffffff99] text-[14px]">
            Made by <span className="text-white cursor-pointer">Riffmax</span> &
            Powered by{" "}
            <span className="text-white cursor-pointer">Webflow</span>
          </p>
          <div className="lg:flex gap-4 hidden text-[#ffffff99] cursor-pointer text-[14px] items-center">
            <a href="www">Style Guide</a>
            <a href="www">Documentation</a>
            <a href="www">Changelog</a>
            <a href="www">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
