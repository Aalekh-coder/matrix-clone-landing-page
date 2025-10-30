import { Geist } from "next/font/google";
import Image from "next/image";
import React from "react";

const geist = Geist({
  subsets: ["latin"],
});

const Navbar = ({ open, setOpen }) => {
  return (
    <nav className=" z-20 flex items-center justify-between px-2 py-5 bg-white sticky top-0">
      <Image
        width={120}
        height={120}
        alt="logo"
        src="/images/cropped-matrix-logo-Photoroom-2 (1).png"
      />
      <a
        href="https://wa.me/918810540823?text=Hi,%20I%20am%20interested%20in%20your%20products"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          width={80}
          height={80}
          alt="logo"
          src="/images/whatsappima.png"
          className="h-10 w-auto"
        />
      </a>
      <button
        onClick={() => setOpen(true)}
        className={`${geist.className} font-medium bg-[#CF1919] text-white px-3 py-3 rounded-sm text-lg`}
      >
        Get a Quote
      </button>
    </nav>
  );
};

export default Navbar;
