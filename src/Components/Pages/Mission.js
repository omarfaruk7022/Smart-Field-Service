import React from "react";
import mission from "../Images//undraw_creation_process_re_kqa9.svg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Mission = () => {
  return (
    <div className="lg:px-52 px-5 my-28 bg-[url(https://i.ibb.co/dBPCVjS/background-shapes-01alt-14-41-42-627.webp)] bg-cover bg-center bg-no-repeat">
      <div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 my-12">
          <div data-aos="fade-right">
            <img
              className="w-[500px] ml-0  hidden lg:block shadow-2xl rounded-lg p-12"
              src={mission}
              alt=""
            />
          </div>
          <div data-aos="fade-down">
            <h1 className="font-bold text-3xl">Our Mission</h1>
            <h1 className="mt-8 ml-0">
              Our mission is to utilize creative Design and Development to
              assist our customers in expanding their companies by providing
              market-defining, high-quality solutions that add esteem and make a
              reliable strategic advantage for our clients Our mission is to
              provide optimal solutions that are both high in quality and
              reasonably priced. Customer satisfaction is significantly vital to
              us. We are very friendly to our customers, which helps us retain
              existing clients and expand our customer base.
            </h1>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 mt-56  ">
          <div className="" data-aos="fade-down">
            <h1 className="font-bold text-3xl">Our Vision</h1>
            <h1 className="mt-8">
              Our vision is to grow and develop as a prominent IT service
              provider, perhaps becoming a market leader in providing
              high-quality Web and Software Development solutions in the
              competitive global marketplace. What we do represents our
              professional, adaptable, and integrated approach. By bringing
              value to our customers and workers, we will become a
              process-driven, professionally managed, and highly profitable
              organization
            </h1>
          </div>
          <div data-aos="fade-left">
            <img
              className="w-[500px] lg:ml-48 ml-0 hidden lg:block shadow-2xl rounded-lg p-12"
              src={mission}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
