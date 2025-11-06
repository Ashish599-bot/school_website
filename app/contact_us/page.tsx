"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [inform, setInform] = useState<any[] | null>(null);

  const fetchDetails = async () => {
    try {
      const response = await fetch("/api/contact");
      const data = await response.json();
      setInform(data.getDetails);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  useEffect(() => {
    fetchDetails();
  }, []);

  const images = ["/work.jpg", "/woman.jpg"];

  return (
    <div className="min-h-screen grid grid-cols-4 mb-20">
      {inform?.map((school, index) => (
        <div
          key={school.id}
          className="max-w-sm mx-auto h-[350px] bg-white rounded-2xl shadow-lg mt-10 mb-12"
        >
          <div className="flex justify-center mt-6">
            <img
              src={images[index % images.length]}
              alt="Profile"
              className="h-[90px] w-[70px] rounded-full object-cover border-2 border-black shadow-md"
            />
          </div>

          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900">
              {school.name}
            </h3>
            <p className="text-sm text-gray-500">{school.job_title}</p>

            <div className="w-full border-t border-gray-200 my-4" />

            <div className="text-sm text-gray-700 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Contact</span>
                <span>{school.contact_Number}</span>
              </div>
              <div className="flex gap-6">
                <span className="font-medium text-gray-500">Email</span>
                <span className="truncate">{school.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-500">Years Exp.</span>
                <span>{school.year_experience}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
