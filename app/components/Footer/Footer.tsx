import Link from "next/link";
import MorphMarketButton from "../MorphMarketBtn/MorphMarketBtn";

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-20 border-t bg-[#F4F4F4]" id="footer">
      <div className="md:flex justify-center">
        <div className="md:text-center text-center mt-4">
          <div>
            <p className="text-4xl mb-5">Contact us</p>
          </div>
          <div className="mb-5 text-xs">
            <p>Email</p>
            <Link href={"mailto:geckogenetics@gmail.com"}>
              <p className="text-lg">geckogenetics@gmail.com</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row space-y-10 md:space-y-0 justify-between mb-20 items-center text-center">
        <div>
          <p>Geckogen</p>
          <p>San Jose, California, US</p>
        </div>
        <div className="flex justify-center gap-4">
          <div className="flex items-center bg-black rounded-lg h-11 w-30">
            {/* <Link href="https://www.morphmarket.com/stores/edgatron/" passHref>
              <button className="flex justify-center py-1.5 px-2 w-[100px] h-[35px]">
                <img
                  src="/MorphMarketWhite.webp"
                  alt="Morph Market Logo"
                  className="w-full h-full object-contain"
                />
              </button>
            </Link> */}
          </div>
          {/* <div className="bg-black w-11 h-11 p-2 rounded-lg">
            <a href={"https://www.instagram.com/geckogen"} target="_blank">
              <img src="/insta-icon.png" alt="instagram-icon" />
            </a>
          </div> */}
          <div className="flex bg-black w-auto h-auto rounded-lg items-center px-5">
            <a className="text-white" href={"https://www.facebook.com/Geckogenlabs"} target="_blank">
              Send us an email
            </a>
          </div>
      </div>
      <div className="text-center md:flex md:justify-between md:space-y-2">
        <div>
          <p className="text-sm text-gray-400">
            Copyright © 2000 Geckogen. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
