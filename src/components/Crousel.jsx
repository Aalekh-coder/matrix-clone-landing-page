"use client";

import React, { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});
// Sample data structure for testimonials
const testimonials = [
  {
    text: "Service is exemplary, best in the industry. Mr. Parveen accepts all feedback with zeal and positivity, timely delivery and client satisfaction is top priority.",
    user: "Ujjwal Sharma",
    userPhoto: "/images/Nitin_jangir.jpg", // Replace with actual image path or import
  },
  {
    text: "Amazing products Best service and competitive price. Matrix Tissues is the best tissue manufacturers in Delhi and NCR",
    user: "Ujjwal Sharma",
    userPhoto: "/images/tilak-raj.jpg", // Replace with actual image path or import
  },
];

const TestimonialCarousel = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 1000); // Change testimonial every 1 second

    return () => clearInterval(timer);
  }, []);

  const goLeft = () =>
    setIndex(index === 0 ? testimonials.length - 1 : index - 1);
  const goRight = () => setIndex((index + 1) % testimonials.length);

  const { text, user, userPhoto } = testimonials[index];

  return (
    <div
      style={{
        position: "relative",
        height: "400px",
        backgroundImage: `url("/images/gym-abnr.webp")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "#fff",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 32,
          left: 0,
          width: "100%",
          textAlign: "center",
          fontSize: 32,
          fontWeight: "bold",
          letterSpacing: 1.3,
          textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
        }}
      >
        TESTIMONIALS
        <div
          style={{
            height: 4,
            width: 60,
            background: "#ffd700",
            margin: "8px auto 0 auto",
            borderRadius: 2,
          }}
        />
      </div>
      <button
        onClick={goLeft}
        style={{
          position: "absolute",
          left: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <ArrowLeft size={32} color="#fff" />
      </button>
      <div
        className={`${geist.className}`}
        style={{
          margin: "0 auto",
          maxWidth: 400,
          textAlign: "center",
          fontSize: 17,
          fontWeight: 500,
          marginTop: 90,
          textShadow: "1px 1px 6px rgba(0,0,0,0.5)",
          padding: "0 20px 0 20px",
        }}
      >
        {text}
      </div>
      <button
        onClick={goRight}
        style={{
          position: "absolute",
          right: 10,
          top: "50%",
          transform: "translateY(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <ArrowRight size={32} color="#fff" />
      </button>
      {/* User photo and name */}
      <div
        style={{
          position: "absolute",
          bottom: 30,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <img
          src={userPhoto}
          alt={user}
          style={{
            width: 50,
            height: 50,
            borderRadius: "50%",
            border: "3px solid #fff",
            objectFit: "cover",
            boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
            marginRight: 16,
          }}
        />
        <span
          style={{
            fontSize: 24,
            color: "#ffd700",
            fontWeight: 600,
            textShadow: "1px 1px 6px rgba(0,0,0,0.4)",
          }}
        >
          {user}
        </span>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
