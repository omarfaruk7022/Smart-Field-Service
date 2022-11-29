import React from "react";

const About = () => {
  return (
    <div className="my-28 bg-gray-200 p-12">
      <div className="">
        <h1 className="border-b-2  m-auto text-4xl text-orange-400 text-center hover:border-pink-400 w-64 ease-in duration-300 ">
          {" "}
          About us
        </h1>
      </div>
      <h1 className="lg:w-[600px] w-full m-auto text-xl text-gray-600">
        We're a bunch of people who've grown up with technology and have always
        been early adopters. We are national residents with experience in web
        and mobile design and development. Our goal is to figure out exactly
        what you need and provide it to you in the most efficient and effective
        way. Our motto is to get client’s satisfaction.
      </h1>
    </div>
  );
};

export default About;
