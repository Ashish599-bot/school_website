'use client'
import Image from "next/image"
import { useState, useEffect } from "react"
export default function Home() {
  const img = [
    "/image/pic.jpg",
    "/image/pic2.jpeg",
    "/image/pic3.jpg"
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % img.length)
    }, 3000)

  }, [img.length])

  return (
    <main className="bg-white min-h-screen">
      <div
        className="w-full h-150 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${img[index]})`,
        }}
      >
        {/* Optional content overlay */}
        <div className="bg-black/40 h-full w-full flex items-center justify-center text-white text-3xl font-bold">
          Beautiful Bhutan
        </div>
      </div>

    </main>
  )
}
