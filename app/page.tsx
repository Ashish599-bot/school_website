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
    <main className="bg-white min-h-screen p-4">
      <div
        className="w-full h-150 bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url(${img[index]})`,
        }}
      >
        {/* {img.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`slide-${i}`}
            className="w-full h-64 object-cover shrink-0"
          />
        ))} */}
        {/* Optional content overlay */}
        <div className="bg-black/40 h-full w-full flex items-end text-white text-3xl font-bold p-4">
          Learn with Dignity and Integrity
        </div>
      </div>
      <div className="p-4 text-blue-700 flex flex-col">
        <h1 className="font-bold text-xl ">VISION </h1>
        <p>“To nurture lifelong learners who are responsible, compassionate, and capable of contributing positively to society.”</p>
        <h1 className="font-bold text-xl mt-4">Message from King</h1>
        <p>"Education should empower citizens with 21st-century skills, a strong work ethic, and a deep sense of responsibility to the nation"</p>
      </div>

    </main>
  )
}
