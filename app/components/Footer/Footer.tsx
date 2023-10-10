import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-10 px-20 border-t bg-[#F4F4F4]">
      <div className="md:flex justify-center">
        <div className="md:text-center mt-4">
          <div>
            <p className="text-4xl mb-5">Contact us</p>
          </div>
          <div className="mb-5 text-xs font-bold">
            <p>Mail</p>
            <Link href={"mailto:edgar@geckogen.com"}>
              <p className="text-lg font-bold">edgar@geckogen.com</p>
            </Link>
          </div>
          <div className="mb-14 text-xs">
            <p>Phone</p>
            <Link href={"tel:+526621403149"}>
              <p className="text-lg">(662) 140 3149</p>
            </Link>
          </div>
        </div>
      </div>

      <div className="md:flex space-y-10 justify-between mb-20 items-center">
        <div>
          <p>Geckogen</p>
          <p>San Jose, California, US</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-black w-11 h-11 p-2 rounded">
            <Link href={"/"}>
              <img src="/insta-icon.png" alt="instagram-icon" />
            </Link>
          </div>
          <div className="bg-black w-11 h-11 p-2 rounded">
            <Link href={"/"}>
              <img src="/facebook-icon.png" alt="facebook-icon" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <p className="text-sm text-gray-400">
          Copyright © 2023 Geckogen. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
