
"use client";
import { X } from "lucide-react";
import Form from "./Form";

const GetQuotePopup = ({ open, onClose }) => {


  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-5 duration-300">
      <div className="bg-white rounded-md shadow-lg w-full max-w-md p-6 relative">
        <button
          onClick={() => onClose(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
          aria-label="Close popup"
        >
          <X />
        </button>
        <h2 className="text-xl font-bold mb-4 text-center">Get a Quote</h2>
        <Form />
      </div>
    </div>
  );
};

export default GetQuotePopup;