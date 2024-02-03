export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-between min-h-[300px] gap-4 bg-black p-10 ">
      <div className="flex xs:flex-col lg:flex-row  xs:items-center  gap-4 lg:items-start justify-between  relative w-[80%]">
        <div className="flex gap-2 items-center">
          <img className="w-[50px] h-[50px] " src="logo.svg" />
          <div className="text-white text-center lg:text-left font-oswald text-[20px] font-bold  relative">
            Wyrzuta{" "}
          </div>
        </div>

        <div className="flex flex-col gap-1 shrink-0">
          <div className="text-white text-[20px] text-center lg:text-left font-bold  relative w-[104px]">
            Features{" "}
          </div>
          <div className="text-white text-center lg:text-left relative">
            Link Shortening{" "}
          </div>
          <div className="text-white text-center lg:text-left relative">
            Branded Links{" "}
          </div>
          <div className="text-white text-center lg:text-left  relative">
            Analytics{" "}
          </div>
        </div>
        <div className="flex flex-col gap-1 shrink-0 relative">
          <div className="text-white text-[20px] text-center lg:text-left font-bold  relative w-[104px]">
            Resources{" "}
          </div>
          <div className="text-white text-center lg:text-left  relative">
            Link Sharing{" "}
          </div>
          <div className="text-white text-center lg:text-left  relative">
            Branded Links{" "}
          </div>
          <div className="text-white text-center lg:text-left  relative">
            Analytics{" "}
          </div>
        </div>
        <div className="flex flex-col gap-1  shrink-0 relative">
          <div className="text-white text-center text-[20px] xs:text-center lg:text-left font-bold  relative w-[104px]">
            Company{" "}
          </div>
          <div className="text-white text-center lg:text-left  relative">
            Link Sharing{" "}
          </div>
          <div className="text-white text-center lg:text-left  relative">
            Branded Links{" "}
          </div>
          <div className="text-white text-center lg:text-left  relative">
            Analytics{" "}
          </div>
        </div>
        <div className="flex flex-row gap-[9px] items-start justify-start shrink-0 relative">
          <div className="flex flex-row gap-1 items-center justify-start ">
            <img
              src="linkedin.svg"
              width={30}
              height={30}
              alt="linkedin"
              className=""
            />
          </div>
          <div className="flex flex-row gap-1 items-center justify-start "></div>
          <div className="flex flex-row gap-1 items-center justify-start ">
            <img
              src="facebook.svg"
              width={30}
              height={30}
              alt="facebook"
              className=""
            />
          </div>
          <div className="flex flex-row gap-1 items-center justify-start ">
            <img
              src="instagram.svg"
              width={30}
              height={30}
              alt="instagram"
              className=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center xl:justify-between md:gap-8 xs:gap-2 relative">
        <div className="flex flex-row gap-4 items-center justify-center  w-[198px] relative">
          <div className="flex flex-row gap-1 items-center  ">
            <img
              src="message.svg"
              width={32}
              height={24}
              alt="Logo"
              className=""
            />

            <div className="text-[#ffffff] text-center lg:text-left font-bodytext-font-family text-bodytext-font-size leading-bodytext-line-height font-bodytext-font-weight relative">
              info@wyrzuta.com{" "}
            </div>
          </div>
        </div>

        <div className="text-[#ffffff] text-center lg:text-left font-bodytext-font-family text-bodytext-font-size leading-bodytext-line-height font-bodytext-font-weight relative">
          Privacy policy{" "}
        </div>
        <div className="text-[#ffffff] text-center lg:text-left font-bodytext-font-family text-bodytext-font-size leading-bodytext-line-height font-bodytext-font-weight relative">
          Terms &amp; conditions{" "}
        </div>
      </div>
    </div>
  );
}
