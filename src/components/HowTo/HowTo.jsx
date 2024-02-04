import "./HowTo.scss";

export default function HowTo() {
  return (
    <div className="p-2.5 justify-center items-center gap-2.5 flex flex-wrap bg-white">
      <img
        className="w-[500px] h-[500px]"
        src="/packing.jpg"
      />
      <img
        className="w-[500px] h-[500px]"
        src="/sending.jpg"
      />
      <img
        className="w-[500px] h-[500px]"
        src="/things.jpg"
      />
      <div className="h-[1099px] justify-center items-center gap-2.5 flex">
        <div className="w-[500px] h-[500px]">
          <span className="text-black text-5xl font-normal font-['Inter'] leading-[58px]">
            Wystarcza trzy kroki:
            <br />
          </span>
          <span className="text-black text-5xl font-normal font-['Inter'] leading-[58px]">
            Wybierz rzeczy do oddania
            <br />
            Spakuj
            <br />
            Zamów kuriera i wyślij
          </span>
        </div>
      </div>
    </div>
  );
}
