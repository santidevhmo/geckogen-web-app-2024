"use client";

import Link from "next/link";
import ProductCard from "./components/ProductCard/ProductCard";
import { Reenie_Beanie } from 'next/font/google';

const reenieBeanie = Reenie_Beanie({
  weight: '400',
  subsets: ['latin']
});

export default function Home() {
  return (
    <div>

      {/* Geckogen */}
      <div className="items-center justify-center bg-white py-16 px-4 sm:px-6 lg:px-8"></div>

      {/* New Hero Section */}
      <div className="
      relative 
      w-11/12
      mb-20 md:mb-36
       mx-auto flex flex-col justify-center items-center overflow-visible
      ">

        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
          src="/GeckogenHeroVideo.mp4"
          autoPlay
          loop
          muted
        />

        {/* Black Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-3xl"></div>

        {/* Content */}
        <h1 className="font-custom font-light 
        text-3xl md:text-5xl lg:text-7xl 
        leading-tight text-center text-white 
        px-10 py-12 md:py-12 lg:py-32 z-10 
        ">
          Changing the mentality from “pet ownership” to a “partnership” by focusing on the
          preservation of non-human species.
        </h1>

        {/* Blue Gecko Image */}
        <img
          src="/geckoBlueHero.jpeg"
          alt="Descriptive Alt Text"
          className="
          absolute 
          -bottom-10 -left-6 md:-bottom-20 lg:-bottom-12 md:-left-12 lg:-left-24 
          h-20 w-32 md:h-28 md:w-48 lg:h-40 lg:w-80 
          object-cover rounded-lg z-10
          hidden md:block"
        />


        {/* Button Positioned at the Bottom */}
        <a
          href="https://youtube.com/@geckogen?si=9diEzIecBmuiPpcL"
          target="_blank"
          rel="noopener noreferrer"
          className="
    absolute -bottom-6 
    z-10
  "
        >
          <button className="
    bg-[#FF0000] hover:bg-[#C80606]
    text-white text-md md:text-xl 
    py-2 px-8 md:py-3 md:px-10 
    rounded-xl 
    flex items-center gap-3 transition
  ">
            Watch Now
            <svg
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 fill-white"
            >
              <title>YouTube</title>
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
          </button>
        </a>

      </div>

      <p className="
      font-custom text-center 
      text-lg md:text-2xl
      px-10 md:px-20 
      mb-4">
        A partnership where we become guardians rather than owners by using science to improve
        conditions for all living things.
      </p>

      <p className={`${reenieBeanie.className} 
      text-2xl md:text-3xl 
      mb-10 md:mb-36
      text-center
      `}>
        ~ Edgar A. Machuca Sahagun
      </p>

      <img
        src="/geckoBlueHero.jpeg"
        alt="Descriptive Alt Text"
        className="
        mx-auto mb-0
        h-28 w-56
        object-cover rounded-lg
        md:hidden
        relative
        -left-0 top-6"
        />


      {/* Science in your hands */}
      <div className="h-[55rem] bg-black lg:bg-[url(/GeckogenScienceBall.gif)] lg:bg-cover lg:bg-center">
        <div className="h-full flex flex-col justify-center items-center space-y-8 lg:bg-black/50">
          <div className="flex justify-center items-center">
            <div className="w-8/12 md:w-7/12 text-gray-200 lg:text-center lg:w-96">
              <p className="text-5xl mb-5 md:text-6xl text-center">Science in your hands</p>
              <p className="text-lg text-center">
                Our primary focus is to offer a vast diversity of gecko morphs
                while providing a healthy and vigorous specimen.
              </p>
            </div>
          </div>

          <div className="lg:hidden relative group">
            {/* Transparent overlay div to block interactions */}
            <div className="absolute inset-0 bg-transparent z-10"></div>

            {/* Background image div to prevent direct access */}
            <div
              className="object-cover h-[30rem] w-[30rem] bg-center bg-cover"
              style={{
                backgroundImage: 'url(/GeckogenScienceBall.gif)',
                pointerEvents: 'none',  // Disables all interactions with the image
                userSelect: 'none'      // Prevents text/image selection
              }}
              onContextMenu={(e) => e.preventDefault()} // Disables right-click menu
            />
          </div>
        </div>
      </div>

      { }
      <div className="bg-black lg:flex lg:h-[54rem]" id="DNA">
        <div className="flex justify-center pt-24 text-gray-200">
          <div className="w-8/12 md:w-8/12">
            <p className="text-5xl mb-5 md:text-6xl text-center lg:text-left">DNA Sequencing Project</p>
            <p className="text-lg text-center lg:text-left">
              We are excited to announce our Crested Gecko Sequencing Project.
              The project aims to identify markers for crested gecko phenotypes.
            </p>
            <br />
            <p className="text-lg text-center lg:text-left">
              A molecular certification ensuring the specimen carries the gene
              has become more important with the rise in morphs and prices.{" "}
            </p>
            <br />
            <p className="text-lg text-center lg:text-left">
              The service will be a non intrusive collection approach. For the pilot program, we will begin requesting samples
              from collectors that wish to participate.
            </p>
            <div className="flex justify-center mt-20">
              <div className="whitespace-nowrap">
                <Link
                  className="py-4 px-6 mr-4 cursor-pointer rounded-full w-28 bg-blue-500 hover:bg-blue-400 text-white lg:text-lg text-center font-bold"
                  href={"https://www.instagram.com/geckogen"}
                  target="_blank"
                >
                  CONTACT US FOR MORE INFORMATION
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="object-cover h-[20rem] w-[25rem] lg:h-[30rem] lg:w-[70rem] rounded-full mb-20 mt-20 sm:mt=0"
            src="/dna-geckogen.webp"
            alt=""
          />
        </div>
      </div>

      {/* Our Specimens */}
      <div className="bg-black md:h-[40rem] md:flex md:flex-row-reverse">
        <div className="flex justify-center items-center">
          <div className="w-8/12 text-gray-200 pt-20 md:pt-0 md:w-8/12 text-center md:text-right lg:w-7/12">
            <p className="text-5xl mb-5 md:text-6xl">Our Specimens</p>
            <p className="text-lg">
              We offer you a healthy high quality specimen, housed individually,
              but handled often. We are committed to ensure a long lasting
              relationship between you and your pet.
            </p>
            <br />
            <p className="text-lg">
              Our goal is to make sure every gecko thrives while in your care.
              We ensure this by having an open line of communication to answer
              questions.
            </p>
          </div>
        </div>
        <div className="pb-14 flex items-center lg:pb-24">
          <img
            className="w-96 h-96 md:w-[50rem] md:h-auto rotate-45 mt-40"
            src="/side-profile-gecko.png"
            alt=""
          />
        </div>
      </div>

    </div>
  );
}
