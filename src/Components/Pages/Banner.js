import React from "react";
import banner from "../Images//banner.jpg";
import logo from "..//Images//logo.png";

const Banner = () => {
  return (
    <div>
      <section>
        <div className="bg-gray-100 ">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-900">
            {/* <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-900">
              <span className="text-primary"> Welcome </span> <span>To</span>{" "}
              <span className="text-orange-400">Idol Group</span>
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-900">
              While pacing through my childhood, I encountered a vast mass of
              suffering humanity but had also the fortune to see my father
              helping a great number of them as a doctor. I Too grew up with
              that sense of responsibility of being able to do something for the
              poor fellow muslims of my country. My first involvement in the
              trade of manpower recruitment was initiated by my attempt to bring
              a few young men from my hometown to be employed abroad in year
              1986. There I found that , one young man from each poor family
              employed abroad turned out to be cause and source of very survival
              of the rest of their family members. This enthused me into the
              trade of manpower recruitment.
            </p> */}
            <img className="" src={logo} alt="" />
          </div>
        </div>
        <div>
          <img
            src={banner}
            alt=""
            className="w-3/10 mx-auto mb-12 -mt-20 rounded-lg shadow-lg lg:-mt-40 bg-gray-200"
          />
        </div>
      </section>
      {/* <section class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat bg-fixed h-[75vh]">
        <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white/95 sm:to-white/25"></div>

        <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div class="max-w-xl text-center sm:text-left">
            <h1 class="text-3xl font-extrabold sm:text-6xl" data-aos="fade-right">
              Come for our service
            </h1>
              <strong class="text-6xl font-extrabold block bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-600 to-red-500 " data-aos="fade-left"> 
                Stay for everything
              </strong>

            
            
          </div>
        </div>
      </section>
      <img  className="m-auto" src={banner} alt="" /> */}
      {/* <video autoPlay loop muted  className="bg-fixed " src={video}></video> */}
    </div>
  );
};

export default Banner;
