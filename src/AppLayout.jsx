import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Meme from "./sections/Meme";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="  bg-main">
     
        <Hero />
      </main>
      <div className=" h-[70px] border-t-2 border-b-2 py-4 border-[#751717] mb-2 bg-[#f2bcc5d4] ">
      <MemeMark/>
      </div>
      <div>
        <dl className="h-[50px]" />
        <Intro />
        <dl className="h-[100px]" />
        <Meme />
        <dl className="h-[100px]" />
        {/* <AboutUs /> */}

        {/* <div className="container-wrapper mt-8">
          <div className=" flex items-center justify-center gap-2">
            <img
              src="/images/logo.png"
              className="max-w-[7rem] w-full rounded-full"
              alt=""
            />

            <p className=" text-2xl font-medium">KingPepe</p>
          </div>
        </div> */}
      </div>
      <footer className=" w-full pb-8 ">
        <div className="container-wrapper mt-8 ">
          <div className="flex justify-between">
            <div className="mt-8 flex items-center justify-center gap-2">
              <img
                src="/images/logo.png"
                className="max-w-[4rem] w-full rounded-full"
                alt=""
              />

              <p className=" text-2xl font-sushi-one">Sushi Cat</p>
            
            </div>
            <div>
               <p>Copyright 2024 SUSHICAT. All Rights Reserved.</p>
            </div>

            <div className="mt-8  flex justify-center items-center space-x-6">
              <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
                <a target="_blank" href="#">
                  <FaTwitter />
                </a>
                <a target="_blank" href="#">
                  <FaTelegram />
                </a>
              </div>

              <button className="text-2xl lg:hidden">
                <IoMenu />
              </button>
            </div>
          </div>

        
        </div>
      </footer>
    </>
  );
}

export default AppLayout;
