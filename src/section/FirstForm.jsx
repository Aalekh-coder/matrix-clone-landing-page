"use client";

import { Geist } from "next/font/google";
import { useState, useRef } from "react";

const geist = Geist({
  subsets: ["latin"],
});

const FirstForm = () => {
  const formRef = useRef(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(formRef.current);
    const name = formRef.current.querySelector(
      'input[placeholder="Name"]'
    ).value;
    const phone = formRef.current.querySelector(
      'input[placeholder="phone"]'
    ).value;
    const place = formRef.current.querySelector(
      'input[placeholder="Place"]'
    ).value;
    const message = formRef.current.querySelector("textarea").value;

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/matrixtissues@gmail.com",
        {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        formRef.current.reset();

        // Prepare WhatsApp message
        const whatsappText = `Hi, I am ${name} from ${place}.%0A%0AMessage: ${message}%0A%0AContact: ${phone}`;
        const waUrl = `https://wa.me/918810540823?text=${whatsappText}`;

        // Delay WhatsApp redirect by 1 second to show success message
        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);
      } else {
        setStatus("❌ Failed to send. Please try again.");
      }
    } catch (error) {
      console.error("FormSubmit Error:", error);
      setStatus("⚠️ Something went wrong. Please try later.");
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="bg-black mb-10 px-4 py-5 rounded-xl"
    >
      <h3
        className={`${geist.className} text-white text-2xl font-bold text-center mb-5`}
      >
        Bulk & Whosesale Order Only
      </h3>
      <div className="flex items-center gap-3">
        {/* hidden  */}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_subject" value="New Enquiry from Website" />

        <input
          type="text"
          className={`${geist.className} bg-white px-2 rounded-sm py-2 w-1/2 focus:outline-none `}
          placeholder="Name"
          required
        />
        <input
          type="email"
          className={`${geist.className} bg-white px-2 rounded-sm py-2 w-1/2 focus:outline-none `}
          placeholder="Email"
          required
        />
      </div>
      <div className="flex items-center gap-3 mt-2">
        <input
          type="phone"
          className={`${geist.className} bg-white px-2 rounded-sm py-2 w-1/2 focus:outline-none `}
          placeholder="phone"
          minLength={10}
          maxLength={10}
          pattern="[0-9]{10}"
          required
        />
        <input
          type="text"
          className={`${geist.className} bg-white px-2 rounded-sm py-2 w-1/2 focus:outline-none `}
          placeholder="Place"
          required
        />
      </div>

      <textarea
        placeholder="Message"
        required
        className={`${geist.className} bg-white px-2 rounded-sm py-2 mt-3 w-full`}
      ></textarea>

      <button
        type="submit"
        className={`${geist.className} text-white bg-red-600 w-full py-2 rounded-sm font-bold`}
      >
        Submit Request
      </button>

      {status && (
        <p className="text-center mt-4 text-sm text-white">{status}</p>
      )}
    </form>
  );
};

export default FirstForm;
