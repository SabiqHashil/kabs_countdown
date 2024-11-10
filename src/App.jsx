import "./App.css";
import Countdown from "./component/Countdown";
import Footer from "./component/Footer";
import Head from "./component/Head";

function App() {
  return (
    // <div className="  md:bg-gradient-to-r md:from-[#a555ec] md:from-30% md:via-[#d09cfa] md:via-80% md:to-[#f3ccff] bg-gradient-to-b from-[#a555ec] from-30% via-[#d09cfa] via-80% to-[#c87ddf] flex flex-col items-center justify-between h-dvh w-[100%]">
    <div className="absolute inset-0 -z-10 h-fit w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="flex flex-col items-center justify-center md:gap-28 gap-10 flex-grow  ">
        <Head />
        <Countdown />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

<>
  <div className="relative h-full w-full bg-slate-950">
    <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">

    </div>
    <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]">

    </div>
  </div>
</>;
