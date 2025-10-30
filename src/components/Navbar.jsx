import Image from "next/image";
import React from "react";

const Navbar = () => {
  return (
    <nav className=" z-50 flex items-center justify-between px-2 py-5 bg-white sticky top-0">
      <Image
        width={100}
        height={100}
        alt="logo"
        src="/images/cropped-matrix-logo-Photoroom-2 (1).png"
      />

      <Image
        width={100}
        height={100}
        alt="logo"
        src="/images/whatsappima.png"
        className="h-12 w-auto"
      />
      <button className="font-medium bg-[#CF1919] text-white px-3 py-3 rounded-sm text-lg">
        Get a Quote
      </button>
    </nav>
  );
};

export default Navbar;
