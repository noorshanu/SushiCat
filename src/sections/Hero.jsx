function Hero() {
  return (
    <section className=" py-6">
      <div className="container-wrapper">
        <div className="relative z-50">

         

          <div className=" flex justify-between flex-col sm:flex-row items-center ">
            <div className=" w-full bg-[#f5b0bb] bg-opacity-45 border rounded-lg p-5">
              <h1 className=" font-sushi-one text-5xl my-4 text-[#d95a83]">
                Sushi Cat
              </h1>

              <p className="font-sushi-one text-xl text-black">
                Welcome to the SushiCat Universe! Embark on a whimsical journey
                through the world of SushiCat, where sushi and cats collide in a
                delightful fusion of flavor and feline charm. SushiCat isn't
                just another meme coin; it's a gateway to a universe of culinary
                adventures and virtual delights. Join us as we explore the realm
                of sushi-making cats and embark on thrilling adventures in our
                meow-nificent universe!
              </p>
              <div className="relative z-40 flex items-center justify-start my-4 max-sm:flex-col max-sm:space-y-4 sm:space-x-5">
                <a
                  href="#"
                  target="_blank"
                  className="py-2 text-base uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#000000] to-[#2B0000] shadow-lg shadow-black/40 text-white  font-bold border border-white"
                >
                  buy now
                </a>
                <a
                  href="#"
                  className="text-base py-2 uppercase font-sushi-one px-10 rounded-full bg-gradient-to-b from-[#e47369] to-[#f1a3ff] shadow-lg shadow-black/40 text-black  font-bold border border-yellow"
                >
                  join telegram
                </a>
              </div>
            </div>

            <div className=" w-full">
              <div>
                <img src="images/hero.png" alt="" className=" mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
