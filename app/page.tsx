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
      <div className="flex flex-col items-center justify-center text-left bg-white py-40 px-4 sm:px-6 lg:px-8">
        <h1 className="font-custom text-7xl">
          Changing the mentality from “pet ownership” to a “partnership” by focusing on the
          preservation of non-human species.
        </h1>
        <div className="relative w-48 h-48 mb-6">
          <img
            src="/geckoBlueHero.jpeg"
            alt="A non-human species (example: gecko)"
            className="rounded-full object-cover w-full h-full"
          />
        </div>
        <p className="text-lg text-gray-600 mb-8">
          A partnership where we become guardians rather than owners by using science to improve
          conditions for all living things.
        </p>
        <p className={`${reenieBeanie.className} text-3xl mb-10`}>
          Edgar A. Machuca Sahagun
        </p>
        <button className="bg-black text-white py-3 px-8 rounded-full text-lg hover:bg-gray-800 transition">
          Shop now
        </button>
      </div>
      {/* <div className="lg:flex lg:h-[48rem] lg:justify-end">
        <div className="flex justify-center lg:justify-end pt-32 lg:pt-52">
          <div className="w-8/12 text-left lg:text-left">
            <p className="text-5xl mb-5 md:text-6xl lg:text-7xl">Geckogen</p>
            <p className="md:text-2xl lg:text-xl mb-7">
              Changing the mentality from “pet ownership“ to a “partnership” by focusing on the preservation of non-human species.
            </p>
            <p className="md:text-2xl lg:text-xl mb-7">
              A partnership where we become guardians rather than owners by using science to improve conditions for all living things.
            </p>
            <p className={`${reenieBeanie.className} text-3xl mb-10`}>
              Edgar A. Machuca Sahagun
            </p>
            <div className="whitespace-nowrap">
              <Link
                className="py-2 px-4 mr-4 cursor-pointer rounded-full w-28 bg-blue-500 text-white lg:text-lg"
                href={"/shop"}
              >
                Shop Now
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center relative">
          <div className="flex justify-end relative" style={{ right: '-200px' }}>
            <img
              src="/gecko-hero-bw.jpeg"
              alt="Gecko Hero Image"
              className="py-2 h-72 w-fit md:h-96 lg:w-[100rem] lg:h-auto"
            />
          </div>
        </div>
      </div> */}

      {/* Science in your hands */}
      <div className="h-[55rem] bg-black lg:bg-[url(/science-ball.gif)] lg:bg-cover lg:bg-center">
        <div className="h-full flex flex-col justify-center items-center space-y-8 lg:bg-black/50">
          <div className="flex justify-center items-center">
            <div className="w-8/12 md:w-7/12 text-gray-200 text-left lg:text-center lg:w-96">
              <p className="text-5xl mb-5 md:text-6xl">Science in your hands</p>
              <p className="text-lg">
                Our primary focus is to offer a vast diversity of gecko morphs
                while providing a healthy and vigorous specimen.
              </p>
            </div>
          </div>
          <div className="lg:hidden">
            <img
              className="object-cover h-[30rem] w-[30rem]"
              src="/science-ball.gif"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* DNA Sequencing Project */}
      <div className="bg-black lg:flex lg:h-[54rem]" id="DNA">
        <div className="flex justify-center pt-24 text-gray-200">
          <div className="w-8/12 md:w-8/12">
            <p className="text-5xl mb-5 md:text-6xl">DNA Sequencing Project</p>
            <p className="text-lg">
              We are excited to announce our Crested gecko Sequencing project.
              The project aims to identify markers for crested gecko phenotypes.
            </p>
            <br />
            <p className="text-lg">
              A molecular certification ensuring the specimen carries the gene
              has become more important with the rise in morphs and prices.{" "}
            </p>
            <br />
            <p className="text-lg">
              The service will be a non intrusive collection approach. The pilot is to begin requesting samples
              from collectors that wish to participate.
            </p>
            <div className="whitespace-nowrap mt-20">
              <Link
                className="py-4 px-6 mr-4 cursor-pointer rounded-full w-28 bg-blue-500 text-white lg:text-lg"
                href={"https://www.instagram.com/geckogen"} target="_blank">
                Contact Us for more information
              </Link>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <img
            className="object-cover h-[20rem] w-[25rem] lg:h-[30rem] lg:w-[70rem] rounded-full mb-20"
            src="/dna-geckogen.webp"
            alt=""
          />
        </div>
      </div>

      {/*
      {
        // Featured Products 
      }
      <div className="py-14">
        <div className="flex justify-center mt-4">
          <div className="w-8/12 md:w-8/12 text-center">
            <p className="text-5xl">Featured Geckos</p>
          </div>
        </div>
        <div className="flex justify-center py-10">
          <div className="w-8/12 md:w-10/12 flex flex-wrap justify-center gap-5 gap-y-12">
            {
              // Gecko 1
            }
            <ProductCard
              productId="prod_P3dqsxunfez7bg"
              productTitle="Full Pin Extreme C19"
              productImage="https://files.stripe.com/links/MDB8YWNjdF8xTzIxRkFBSlRlTUwyOVpVfGZsX3Rlc3Rfc3hFN09OcUI4VE1TU0JLY3hHSEptb3pW00wPp8U5md"
              productPrice={320}
            />

            {
              // Gecko 2
            }
            <ProductCard
              productId="prod_P3dFNDH77Hs7Og"
              productTitle="Red Stripe G24"
              productImage="https://files.stripe.com/links/MDB8YWNjdF8xTzIxRkFBSlRlTUwyOVpVfGZsX3Rlc3RfMjB3YW1zUUFwOVE2R3RLMnNoTkJZam1W002iG28foG"
              productPrice={180}
            />

            {
              // Gecko 3
            }
            <ProductCard
              productId="prod_P3cqKug3rGhkgZ"
              productTitle="Wide Back F G11"
              productImage="https://files.stripe.com/links/MDB8YWNjdF8xTzIxRkFBSlRlTUwyOVpVfGZsX3Rlc3RfZmwwVnZLUmlCRFVYUXF5M0hjNHAxTm1Z008grQs0rE"
              productPrice={450}
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div>
            <Link
              href={"/shop"}
              className="py-2 px-4 mr-1 bg-blue-500 text-white rounded-full lg:text-lg"
            >
              Explore the catalog
            </Link>
          </div>
        </div>
      </div>
    */}

      {/* Our Specimens */}
      <div className="bg-black md:h-[40rem] md:flex md:flex-row-reverse">
        <div className="flex justify-center items-center">
          <div className="w-8/12 text-gray-200 pt-20 md:pt-0 md:w-8/12 md:text-right lg:w-7/12">
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
            className="w-96 h-96 md:w-[50rem] md:h-auto"
            src="/side-profile-gecko.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
