// "use client";
// import { Geist } from "next/font/google";
// import { useState } from "react";

// const geist = Geist({
//   subsets: ["latin"],
// });

// const SecondForm = () => {
//   const [status, setStatus] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true); // Start loading
//     setStatus("Sending...");

//     const form = e.target;
//     const formData = new FormData(form);
//     const payload = Object.fromEntries(formData);

//     try {
//       const response = await fetch(
//         "https://formsubmit.co/ajax/inquiry.promozione@gmail.com",
//         {
//           method: "POST",
//           body: formData,
//           headers: {
//             Accept: "application/json",
//           },
//         }
//       );

//       if (response.ok) {
//         setStatus("✅ Message sent successfully! Redirecting to WhatsApp...");
//         form.reset();

//         // Prepare WhatsApp message using payload object keys for clean access
//         const whatsappText = `Hi, I am ${payload.name}.\n \nEmail: ${payload.email}\n\nMessage: ${payload.message}\n\nContact: ${payload.contact} \n Place: ${payload.place}`;
//         const waUrl = `https://wa.me/918826544443?text=${encodeURIComponent(
//           whatsappText
//         )}`;

//         // Delay WhatsApp redirect by 1 second to show success message
//         setTimeout(() => {
//           window.open(waUrl, "_blank");
//         }, 1000);
//       } else {
//         // Handle HTTP error statuses (4xx, 5xx)
//         const errorData = await response
//           .json()
//           .catch(() => ({ message: "Submission failed." }));
//         console.error("Submission failed:", response.status, errorData);
//         setStatus("❌ Failed to send. Please check your form or try again.");
//       }
//     } catch (error) {
//       // Handle network errors (e.g., connection lost)
//       console.error("FormSubmit Fatal Error:", error);
//       setStatus("⚠️ A network error occurred. Please try later.");
//     } finally {
//       setLoading(false); // End loading regardless of outcome
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="bg-[#5C8EC5] mb-10 px-4 py-5 rounded-tl-3xl rounded-br-3xl"
//     >
//       <h3
//         className={`${geist.className} text-white text-2xl font-bold text-center mb-5`}
//       >
//         Enquire Now for Best Rate
//       </h3>
//       <div className="flex items-center gap-3">
//         {/* hidden  */}
//         <input type="hidden" name="_cc" value="matrixtissues@gmail.com" />
//         <input type="hidden" name="_nosponsor" value="true" />

//         <input
//           type="text"
//           name="name"
//           id="name"
//           placeholder="Name"
//           required
//           disabled={loading}
//           className={`${geist.className} bg-white px-2 rounded-sm py-2 w-1/2`}
//         />
//         <input
//           type="email"
//           name="email"
//           id="email"
//           placeholder="Email"
//           required
//           disabled={loading}
//           className={`${geist.className} bg-white px-2 rounded-sm py-2 w-1/2`}
//         />
//       </div>
//       <div className="flex items-center gap-3 mt-2">
//         <input
//           type="tel"
//           name="contact"
//           minLength={10}
//           maxLength={10}
//           pattern="[0-9]{10}"
//           id="contact"
//           placeholder="Phone (10 digits)"
//           required
//           disabled={loading}
//           className={`${geist.className} bg-white px-2 rounded-sm py-2 w-1/2`}
//         />
//         <input
//           type="text"
//           name="place"
//           id="place"
//           placeholder="Place / Location"
//           required
//           disabled={loading}
//           className={`${geist.className} bg-white px-2 rounded-sm py-2 w-1/2`}
//         />
//       </div>

//       <textarea
//         name="message"
//         id="message"
//         placeholder="Your message..."
//         rows="4"
//         required
//         disabled={loading}
//         className={`${geist.className} bg-white px-2 rounded-sm py-2 mt-3 w-full`}
//       ></textarea>

//       <button
//         type="submit"
//         disabled={loading}
//         className={`${geist.className} text-white bg-black w-full py-2 rounded-sm font-bold`}
//       >
//         {loading ? "Submitting..." : "Submit Inquiry"}
//       </button>
//       {status && (
//         <p
//           className={`text-center mt-4 text-sm font-medium p-3 rounded-lg ${
//             status.startsWith("✅")
//               ? "bg-green-100 text-green-800"
//               : status.startsWith("❌")
//               ? "bg-red-100 text-red-800"
//               : "bg-yellow-100 text-yellow-800"
//           }`}
//         >
//           {status}
//         </p>
//       )}
//     </form>
//   );
// };

// export default SecondForm;

import Form from "@/components/Form";
import React from "react";

const SecondForm = () => {
  return (
    <div className="bg-[#5C8EC5] mb-10 px-4 py-5 rounded-tl-3xl rounded-br-3xl my-3">
      <h3
        className={`geist text-white text-2xl font-bold text-center mb-5`}
      >
        Enquire Now for Best Rate
      </h3>
      <Form />
    </div>
  );
};

export default SecondForm;
