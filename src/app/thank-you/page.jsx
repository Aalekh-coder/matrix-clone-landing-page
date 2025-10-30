import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-center text-[#DE1E26] mb-4">
        Thank You!
      </h1>
      <p className="text-lg text-center mb-6">
        Your inquiry has been received. We appreciate your interest in our products.
      </p>
      <p className="text-md text-center mb-8">
        Our team will get back to you shortly.
      </p>
      <Link href="/" className="bg-[#DE1E26] text-white px-4 py-2 rounded-md">
        Go Back to Home
      </Link>
    </div>
  )
}

export default page