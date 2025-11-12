"use client";

import { useState } from "react";
import axios from "axios";

const Form = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [place, setPlace] = useState("");
  const [message, setMessage] = useState("");

  // const handleSubmit2 = async (e) => {
  //   e.preventDefault();
  //   setLoading(true); // Start loading
  //   setStatus("Sending...");

  //   const form = e.target;
  //   const formData = new FormData(form);
  //   const payload = Object.fromEntries(formData);

  //   try {
  //     const response = await fetch(
  //       "https://formsubmit.co/ajax/inquiry.promozione@gmail.com",
  //       {
  //         method: "POST",
  //         body: formData,
  //         headers: {
  //           Accept: "application/json",
  //         },
  //       }
  //     );

  //     if (response.ok) {
  //       setStatus("✅ Message sent successfully! Redirecting to WhatsApp...");
  //       form.reset();

  //       // Prepare WhatsApp message using payload object keys for clean access
  //       const whatsappText = `Hi, I am ${payload.name}.\n \nEmail: ${payload.email}\n\nMessage: ${payload.message}\n\nContact: ${payload.contact} \n Place: ${payload.place}`;
  //       const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
  //         whatsappText
  //       )}`;

  //       // Delay WhatsApp redirect by 1 second to show success message
  //       setTimeout(() => {
  //         window.open(waUrl, "_blank");
  //       }, 1000);
  //     } else {
  //       // Handle HTTP error statuses (4xx, 5xx)
  //       const errorData = await response
  //         .json()
  //         .catch(() => ({ message: "Submission failed." }));
  //       console.error("Submission failed:", response.status, errorData);
  //       setStatus("❌ Failed to send. Please check your form or try again.");
  //     }
  //   } catch (error) {
  //     // Handle network errors (e.g., connection lost)
  //     console.error("FormSubmit Fatal Error:", error);
  //     setStatus("⚠️ A network error occurred. Please try later.");
  //   } finally {
  //     setLoading(false); // End loading regardless of outcome
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setStatus("Sending...");
    setLoading(true);
    try {
      const formData = {
        platform: "matrix Landing page",
        platformEmail: "matrixtissues@gmail.com",
        name,
        phone,
        email,
        place,
        message,
      };
      const { data } = await axios.post(
        "http://31.97.207.196:5000/api/form/add",
        formData
      );
      if (data?.success) {
        setLoading(false);
        setStatus("✅ Message sent successfully!");
        setName("");
        setPhone("");
        setEmail("");
        setPlace("");
        setMessage("");

        const whatsappText = `Hi, I am ${name}.\n \nEmail: ${email}\n\nMessage: ${message}\n\nContact: ${phone} \n Place: ${place}`;
        const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
          whatsappText
        )}`;

        // Delay WhatsApp redirect by 1 second to show success message
        setTimeout(() => {
          window.open(waUrl, "_blank");
        }, 1000);
      } else {
        setStatus("❌ Failed to send. Please check your form or try again.");
      }
    } catch (error) {
      console.log(error);
      setStatus(error?.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        name="name"
        id="name"
        placeholder="Name"
        required
        disabled={loading}
        className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-blue-400"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        required
        disabled={loading}
        className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-blue-400"
      />
      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        type="tel"
        name="contact"
        minLength={10}
        maxLength={10}
        pattern="[0-9]{10}"
        id="contact"
        placeholder="Phone (10 digits)"
        required
        disabled={loading}
        className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-blue-400"
      />
      <input
        value={place}
        onChange={(e) => setPlace(e.target.value)}
        type="text"
        name="place"
        id="place"
        placeholder="Place / Location"
        required
        disabled={loading}
        className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-blue-400"
      />
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        name="message"
        id="message"
        placeholder="Your message..."
        rows="4"
        required
        disabled={loading}
        className="w-full border border-gray-300 bg-white text-black rounded-md p-2 focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full border-black border p-2 rounded-md hover:bg-blue-500 bg-white text-black"
      >
        {loading ? "Submitting..." : "Submit Inquiry"}
      </button>

      {status && (
        <p
          className={`text-center mt-4 text-sm font-medium p-3 rounded-lg ${
            status.startsWith("✅")
              ? "bg-green-100 text-green-800"
              : status.startsWith("❌")
              ? "bg-red-100 text-red-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {status}
        </p>
      )}
    </form>
  );
};

export default Form;
