"use client";
import { Geist } from "next/font/google";
import { X } from "lucide-react";
import React, { useRef, useState } from "react";

const geist = Geist({
  subsets: ["latin"],
});

const GetQuotePopup = ({ open, onClose }) => {
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
  if (!open) return null;

  return (
    <div
      className={`${geist.className} fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5 duration-300`}
    >
      <div className="bg-white rounded-md shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => onClose(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Get a Quote</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="tel"
            placeholder="phone"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            type="text"
            placeholder="Place"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
            placeholder="Message"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            rows={4}
          />
          <button
            type="submit"
            className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-900"
          >
            Send
          </button>

          {status && (
            <p className="text-center mt-4 text-sm text-black">{status}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default GetQuotePopup;
