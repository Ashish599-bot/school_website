"use client";

import { useState } from "react";

export default function Home() {
  const [showMore, setShowMore] = useState(false);
  return (
    <section className="bg-gray-50 py-16 mt-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="school_image.jpg"
            alt="T3 Academy team"
            className="rounded-2xl shadow-md w-full max-w-md"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About <span className="text-orange-500">T3 Academy</span>
          </h2>
          <p className="text-gray-600 mb-6">
            At T3 Academy, we believe in transforming talent through technology,
            training, and teamwork. Our mission is to empower learners with the
            practical skills and real-world experience needed to thrive in
            today's fast-paced digital world.
          </p>
          {showMore && (
            <div className="text-gray-600 mt-4 animate-fadeIn">
              <p>
                We offer a range of programs and workshops focused on
                innovation, collaboration, and career growth. Whether you're
                just getting started or advancing your career, our mentors and
                community are here to help you reach your full potential.
              </p>
            </div>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:opacity-90 cursor-pointer mt-4"
          >
            {showMore ? "show less" : "Learn More"}
          </button>
        </div>
      </div>
    </section>
  );
}
