"use client";

import Carousel from "@/components/Crousel";
import {
  Airplay,
  BrickWall,
  ChartSpline,
  FastForward,
  HandCoins,
  Layers,
  Mountain,
  PackageOpen,
  PanelsTopLeft,
  Phone,
  Weight,
  WholeWord,
} from "lucide-react";
import { Lexend_Deca, Geist, Roboto_Slab } from "next/font/google";
import Image from "next/image";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import Navbar from "@/components/Navbar";
import GetQuotePopup from "@/components/PopForm";
import { useState } from "react";

const lexendDeca = Lexend_Deca({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const geist = Geist({
  subsets: ["latin"],
});
const roboto = Roboto_Slab({
  subsets: ["latin"],
});

const Hero = () => {
  const [open, setOpen] = useState(false);
  const categoriesCardDetails = [
    {
      title: "Face Tissue",
      image: "/images/New-Project-41-1.webp",
      bg: "bg-[#F0344F]",
    },
    {
      title: "Kitchen Towel",
      image: "/images/kt1-1.webp",
      bg: "bg-[#9AB12E]",
    },
    {
      title: "Paper Napkin",
      image: "/images/pt (1).webp",
      bg: "bg-[#00BBAE]",
    },
    {
      title: "Toilet Roll",
      image: "/images/tr3-1.webp",
      bg: "bg-[#01729D]",
    },
    {
      title: "Cling Film",
      image: "/images/New-Project-43-1.webp",
      bg: "bg-[#F88E0F]",
    },
    {
      title: "Butter Paper",
      image: "/images/bp (1).webp",
      bg: "bg-[#FFD631]",
    },
  ];

  const style = {
    backgroundImage: `url("/images/bg-1.webp")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    height: "63vh", // adjust as needed
  };

  return (
    <>
      <Navbar open={open} setOpen={setOpen} />
      <GetQuotePopup open={open} onClose={setOpen} />

      <div style={style} role="img" aria-label="Hero background" className="">
        <h1 className="text-4xl font-bold text-center px-3 leading-tight pt-14">
          Everyday Essentials:{" "}
          <span className="text-[#DE1E26]">
            Napkins, Kitchen Towels & Toilet Paper Supplier
          </span>
        </h1>

        <p
          className={`px-5 text-center text-sm ${lexendDeca.className} leading-6`}
        >
          As a leading kitchen towel supplier, we deliver unmatched quality and
          tailored designs that elevate your brand, all at a price that fits
          your business.
        </p>
        <a href="tel:+918810540823">
          <button
            className={`${geist.className} capitalize bg-[#DE1E26] text-white px-2 py-1 mx-auto text-lg flex items-center gap-3 rounded-md mt-5 `}
          >
            <Phone fill="white" size={18} />
            Call for Best Deal
          </button>
        </a>
      </div>

      {/* category section  */}
      <section className="bg-[#EBEBEA] ">
        <h2 className="font-md text-[2.7rem] text-center pt-5 mb-6">
          Categories
        </h2>

        <div className={`${geist.className} grid grid-cols-3 gap-1 px-2 pb-8`}>
          {categoriesCardDetails?.map(({ title, image, bg }, idx) => (
            <div key={idx} className={`${bg} rounded-lg py-2 my-1 `}>
              <Image
                src={image}
                width={100}
                height={100}
                alt={title}
                className=""
              />
              <p className="text-center text-white font-bold text-sm flex flex-wrap justify-center px-4">
                {title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* our face tissue  */}
      <section className="mb-12 px-2">
        <h3 className="text-4xl mt-5">
          Our Face Tissue <span className="text-blue-800">-</span>
        </h3>

        <div className="flex px-1 mt-8 ">
          <div className="flex items-center flex-col">
            <Image
              src={"/images/FT7.webp"}
              width={120}
              height={120}
              alt="tissue"
            />
            <p
              className={`${roboto.className} text-sm font-medium text-center mt-1 px-2`}
            >
              Face Tissue Papyrus 70 Pull
            </p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              src={"/images/FT3-1-2 (2).webp"}
              width={120}
              height={120}
              alt="tissue"
            />
            <p
              className={`${roboto.className} text-sm font-medium text-center mt-1 px-2`}
            >
              Face Tissue Papyrus Classic
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-1 items-start">
          <div>
            <Image
              src="/images/PRODUCT20-1.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Facial Tissue Papyrus 70 pull
            </p>
          </div>
          <div>
            <Image
              src="/images/product-1.jpg"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Luxury Black Face Tissue
            </p>
          </div>
          <div>
            <Image
              src="/images/ft3-4.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Vintage 100 Pulls
            </p>
          </div>
        </div>
      </section>

      {/* our Paper Napkins  */}
      <section className="mb-10 px-2">
        <h3 className="text-4xl mt-5">
          OUR PAPER NAPKINS <span className="text-blue-800">-</span>
        </h3>

        <div className="flex px-1 mt-8 ">
          <div className="flex items-center flex-col">
            <Image
              src={"/images/product50.webp"}
              width={120}
              height={120}
              alt="tissue"
            />
            <p
              className={`${roboto.className} text-sm font-medium text-center mt-1 px-2`}
            >
              Impression Paper Napkin
            </p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              src={"/images/img-1-1.webp"}
              width={120}
              height={120}
              alt="tissue"
            />
            <p
              className={`${roboto.className} text-sm font-medium text-center mt-1 px-2`}
            >
              Cocktail Paper napkin
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-1 items-start">
          <div>
            <Image
              src="/images/products16-1.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Classic Color Napkin
            </p>
          </div>
          <div>
            <Image
              src="/images/PRODUCT48.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Essentia Paper Napkin
            </p>
          </div>
          <div>
            <Image
              src="/images/products32-1.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Name Print Napkin
            </p>
          </div>
        </div>
      </section>

      {/* form  */}
      <FirstForm />

      {/* our kitchen towel  */}
      <section className="mb-10 px-2">
        <h3 className="text-4xl mt-5">
          OUR KITCHEN TOWEL <span className="text-blue-800">-</span>
        </h3>

        <div className="flex mt-8 justify-around px-4">
          <div className="flex items-center flex-col">
            <Image
              src={"/images/kt4-2.webp"}
              width={120}
              height={120}
              alt="tissue"
            />
            <p
              className={`${roboto.className} text-sm font-medium text-center mt-1 px-2`}
            >
              Kitchen Towel
            </p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              src={"/images/product8-4.webp"}
              width={120}
              height={120}
              alt="tissue"
            />
            <p
              className={`${roboto.className} text-sm font-medium text-center mt-1 px-2`}
            >
              Kitchen Towel <br /> Essentia
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-1 items-start justify-around">
          <div className="flex flex-col items-center">
            <Image
              src="/images/kt4-2.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Kitchen Towel
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/product8.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Kitchen Towel Grand
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/kt1 (1).webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Kitchen Towel Washable
            </p>
          </div>
        </div>
      </section>

      <section className={`bg-[#F5F1DC] mb-10 ${geist.className} px-5 py-6`}>
        <p className="font-bold text-center">
          Soft and handy, wipe with cheer, Paper napkins, always near!
        </p>
        <a
          href="https://wa.me/918810540823?text=Hi,%20I%20am%20interested%20in%20your%20products"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="mx-auto bg-[#CF1919] text-white w-full py-1 rounded-lg mt-5 font-medium ">
            Get Wholesale Price
          </button>
        </a>
      </section>

      {/* our Toilets towel  */}
      <section className="mb-10 px-2">
        <h3 className="text-4xl mt-5">
          OUR TOILETS ROLLS <span className="text-blue-800">-</span>
        </h3>

        <div className="flex px-1 mt-8 justify-around">
          <div className="flex items-center flex-col">
            <Image
              src={"/images/product4-3.webp"}
              width={120}
              height={120}
              alt="tissue"
            />
            <p
              className={`${roboto.className} text-sm font-medium text-center mt-1 px-2`}
            >
              Toilet Roll Essentia
            </p>
          </div>
          <div className="flex items-center flex-col">
            <Image
              src={"/images/product3-1-1.webp"}
              width={120}
              height={120}
              alt="tissue"
            />
            <p
              className={`${roboto.className} text-sm font-medium text-center mt-1 px-2`}
            >
              Toilet Roll Classic Set
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-1 items-start ">
          <div className="flex flex-col items-center">
            <Image
              src="/images/tr3 (1).webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Toilet Roll Jumbo
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/product5-4.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Toilet Roll Silk
            </p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/product3-1.webp"
              width={100}
              height={100}
              alt="issue"
            />
            <p
              className={`${roboto.className} text-[13px] font-medium text-center`}
            >
              Toilet Roll Vintage Set
            </p>
          </div>
        </div>
      </section>

      {/* will chech letter  */}

      <section className="bg-[#F5F1DC] grid grid-cols-2 px-3 gap-1 py-4 space-y-4 ">
        <div className="flex gap-4 items-center">
          <span className="bg-[#DE1E26] p-2 text-white rounded-full">
            <HandCoins size={35} />
          </span>
          <p className={`${roboto.className} text-sm font-bold`}>
            Maximize your profit Margins
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <span className="bg-[#DE1E26] p-2 text-white rounded-full">
            <FastForward size={35} />
          </span>
          <p className={`${roboto.className} text-sm font-bold`}>
            Fast Ordering
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <span className="bg-[#DE1E26] p-2 text-white rounded-full">
            <Airplay size={35} />
          </span>
          <p className={`${roboto.className} text-sm font-bold`}>
            Streamline Your Operations
          </p>
        </div>
        <div className="flex gap-4 items-center">
          <span className="bg-[#DE1E26] p-2 text-white rounded-full">
            <PanelsTopLeft size={35} />
          </span>
          <p className={`${roboto.className} text-sm font-bold`}>
            Wholesale & Retails Options
          </p>
        </div>
      </section>

      {/* about  */}
      <section className="bg-[#FAB969] flex justify-center flex-col items-center px-10 py-10">
        <Image
          src="/images/img-flower2-3.webp"
          width={200}
          height={200}
          alt="flower-logo"
        />
        <p className={`${geist.className} my-5 text-lg font-medium`}>
          About Our <br /> Company
        </p>
        <p className="text-2xl text-center font-bold mb-5">
          Matrix Tissues offers paper napkins, kitchen towels, and toilet
          paper—soft, strong, and perfect for home, office, travel, and car use.
        </p>

        <p className={`${geist.className} text-[16px]`}>
          Our premium kitchen towel tissue paper, made from 100% natural virgin
          paper, offers superior absorbency, durability, and hygiene—ideal for
          food, hospitality, and promotional use.
        </p>

        <button
          className={`${geist.className} bg-[#CF1919] text-white px-5 py-2 mt-5 font-medium w-56 rounded-md`}
        >
          Unlock Exclusive Offers
        </button>
        <button
          className={`${geist.className} bg-[#CF1919] text-white px-5 py-2 mt-5 font-medium w-56 rounded-md`}
        >
          Explore Premium Range
        </button>
      </section>

      <section className={`bg-black mb-10 ${geist.className} px-5 py-10`}>
        <h3 className="text-white text-3xl text-center font-medium">
          Why We Accept Minimum Order Of 1 Carton
        </h3>

        <div className="grid grid-cols-2 gap-3 mt-8">
          <div className="bg-gradient-to-t from-white to-gray-400 font-bold px-3 py-3 rounded-sm">
            Emphasizing Partnership and Growth
          </div>
          <div className="bg-gradient-to-t from-white to-gray-400 font-bold px-3 py-3 rounded-sm">
            Highlighting Accessibility and Empowerment
          </div>
          <div className="bg-gradient-to-t from-white to-gray-400 font-bold px-3 py-3 rounded-sm">
            Focusing on Understanding and Flexibility
          </div>
          <div className="bg-gradient-to-t from-white to-gray-400 font-bold px-3 py-3 rounded-sm">
            Emphasizing the Value of Every Business
          </div>
        </div>
      </section>

      {/* Features Hightight  */}

      <section className="px-5 py-8 mb-8">
        <h3 className={`text-center ${geist.className} text-3xl`}>
          Feature Highlights
        </h3>
        <p className="border-2 w-[200px] mx-auto mt-6" />

        <div className="grid grid-cols-2 gap-5 mt-10 ">
          <div className=" flex items-center justify-center rounded-full flex-col gap-2">
            <BrickWall
              className="bg-red-300 text-white h-17 w-17 p-4 rounded-full"
              size={20}
            />
            <p className={`${geist.className} font-medium text-lg`}>Material</p>
          </div>
          <div className=" flex items-center justify-center rounded-full flex-col gap-2 ">
            <Mountain
              className="bg-red-300 text-white h-17 w-17 p-4 rounded-full"
              size={20}
            />
            <p className={`${geist.className} font-medium text-lg text-center`}>
              Texture and Finish
            </p>
          </div>
          <div className=" flex items-center justify-center rounded-full flex-col gap-2">
            <Layers
              className="bg-red-300 text-white h-17 w-17 p-4 rounded-full"
              size={20}
            />
            <p className={`${geist.className} font-medium text-lg`}>
              Thickness
            </p>
          </div>
          <div className=" flex items-center justify-center rounded-full flex-col gap-2">
            <ChartSpline
              className="bg-red-300 text-white h-17 w-17 p-4 rounded-full"
              size={20}
            />
            <p className={`${geist.className} font-medium text-lg`}>
              Usage Type
            </p>
          </div>
          <div className=" flex items-center justify-center rounded-full flex-col gap-2">
            <Weight
              className="bg-red-300 text-white h-17 w-17 p-4 rounded-full"
              size={20}
            />
            <p className={`${geist.className} font-medium text-lg`}>Weight</p>
          </div>
          <div className=" flex items-center justify-center rounded-full flex-col gap-2">
            <PackageOpen
              className="bg-red-300 text-white h-17 w-17 p-4 rounded-full"
              size={20}
            />
            <p className={`${geist.className} font-medium text-lg`}>
              Packaging
            </p>
          </div>
        </div>
      </section>

      {/* crousel  */}
      <Carousel />

      {/* another form  */}
      <SecondForm />
    </>
  );
};

export default Hero;
