import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const Footer = () => {
  return (
    <div
      className={`bg-[#A70C07] my-2 mx-3 text-white text-center text-sm py-3 rounded-lg px-5 ${geist.className}`}
    >
      <p className="mb-5">Matrix tissue Copyrigth © 2024-25</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://promozionebranding.com"
      >
        Website Designed By Promozione Branding® Pvt. Ltd. Website Design
        Company
      </a>
    </div>
  );
};

export default Footer;
