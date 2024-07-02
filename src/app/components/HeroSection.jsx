"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const downloadPdf = () => {
  const pdfUrl = '/Brandon_Phan_Resume_2024.pdf';

  // Create an anchor element
  const link = document.createElement('a');
  link.href = pdfUrl;
  link.download = 'Brandon_Phan_Resume.pdf'; // Default filename
  document.body.appendChild(link);

  // Trigger the download
  link.click();

  // Clean up
  document.body.removeChild(link);
};

const handleHireMeClick = () => {
  const email = 'mailto:brandonphan12@hotmail.com';
  window.location.href = email;
};

const HeroSection = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 my-4">
      <div className="col-span-7 place-self-center place-items-center grid lg:place-items-start">
        <h1 className="text-white max-w-2xl mb-4 lg:text-6xl text-4xl font-extrabold">
          <span className="text-transparent text-6xl bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Hello, I'm{" "}
          </span>
          <br></br>
          <TypeAnimation
            sequence={[
              "Brandon",
              1000,
              "a Full Stack Developer",
              1000,
              "a Software Engineer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-[#ADB7BE] mb-6 textl-lg lg:text-xl">
          Software Engineering, Master of Engineering, University of Calgary
        </p>
        <div>
          <button
            className="bg-gradient-to-br from-blue-500 hover:bg-slate-200 text-white px-6 py-3 rounded-full mr-4"
            onClick={handleHireMeClick}
          >
            Hire Me
          </button>
          <button
            className="m-4 bg-gradient-to-br from-blue-500 via-green-500 px-1 py-1 text-white rounded-full"
            onClick={downloadPdf}
          >
            <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
              Download CV
            </span>
          </button>
        </div>
      </div>
      <div className="col-span-5 place-self-center mt-4 lg:mt-0">
        <div className="bg-[#181818] lg:w-[400px] lg:h-[300px] w-[200px] h-[200px] relative">
          <Image
            src="/images/headshot.jpg"
            className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            width={300}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
