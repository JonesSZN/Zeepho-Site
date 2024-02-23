const Footer = () => {
  return (
    <footer className="w-full flex justify-center border-t border-t-white py-6 bg-[#000f21]">
      <div className="w-[95%] max-w-[1920px]">
        <div className="lg:flex lg:flex-row lg:justify-between flex flex-col items-center ">
          <p className="text-[#ffffff99] text-[14px]">
            Made by <span className="text-white cursor-pointer">Riffmax</span> &
            Powered by{" "}
            <span className="text-white cursor-pointer">Webflow</span>
          </p>
          <div className="lg:flex gap-4 hidden text-[#ffffff99] cursor-pointer text-[14px] items-center">
            <a href="/">Style Guide</a>
            <a href="/">Documentation</a>
            <a href="/">Changelog</a>
            <a href="/">Licenses</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
