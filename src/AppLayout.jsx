import Navbar from "./components/Navbar";
import AboutUs from "./sections/AboutUs";
import Hero from "./sections/Hero";
import Meme from "./sections/Meme";
import { FaTwitter, FaTelegram } from "react-icons/fa";
import { IoClose, IoMenu } from "react-icons/io5";
import Intro from "./sections/Intro";
import MemeMark from "./sections/MemeMark";
import RoadmapCards from "./components/RoadmapCards";

function AppLayout() {
  return (
    <>
   
      <main className="  bg-main">
      <Navbar />
     
        <Hero />
      </main>
      <div className=" h-[70px] border-t-2 border-b-2 py-4 border-[#751717] mb-2 bg-[#f2bcc5d4] ">
      <MemeMark/>
      </div>
      <div>
        <dl className="h-[50px]" />
        <Intro />
     
      </div>
      <footer className=" w-full pb-8 ">
        <div className="container-wrapper mt-8 ">
          <div className="flex justify-between flex-col sm:flex-row">
            <div className="mt-8 flex items-center justify-center gap-2">
              <img
                src="/images/logo.png"
                className="max-w-[4rem] w-full rounded-full"
                alt=""
              />

              <p className=" text-2xl font-sushi-one">Sushi Cat</p>
            
            </div>
          

            <div className="mt-8  flex justify-center flex-col sm:flex-row items-center space-x-6">
            <div>
               <p className="font-sushi-one">Copyright 2024 SUSHICAT. All Rights Reserved.</p>
            </div>
              <div className="flex items-center space-x-4 text-xl [&_a:hover]:opacity-70">
                <a target="_blank" href="#">
                  <FaTwitter />
                </a>
                <a target="_blank" href="#">
                  <FaTelegram />
                </a>
              </div>

             
            </div>
          </div>

        
        </div>
      </footer>
    </>
  );
}

export default AppLayout;
