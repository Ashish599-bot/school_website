"use client";

import { useEffect, useState } from "react";

export default function Contact() {
  const [inform, setInform] = useState<any[] | null>(null);
  const [name, setName] = useState("");

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

  const getEachOne = async (name: string) => {
    try {
      const res = await fetch(`/api/search/${name}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        alert("Failed to search");
        return;
      }

      const { schoolDetails } = await res.json();
      setInform(schoolDetails);
    } catch (error) {
      console.error("Error fetching details:", error);
      alert("Something went wrong while searching");
    }
  };

  const deleteData = async (id: number) => {
    const res = await fetch(`/api/delete/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    });
    if (res.ok) {
      fetchDetails();
      alert("Successfully deleted");
    } else {
      alert("Failed to delete");
    }
  };

  return (
    <main>
      <div className="flex gap-4 justify-center items-center mt-4">
        <input
          className="py-2 px-4 shadow-lg rounded-xl border border-black"
          placeholder="Search here"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={() => getEachOne(name)}
          className="py-2 px-3 bg-blue-400 rounded-xl text-white cursor-pointer hover:bg-blue-500 border border-white"
        >
          Search
        </button>
      </div>
      <div className=" grid grid-cols-4 place-items-center mb-20">
        {inform?.map((school, index) => (
          <div
            key={school.id}
            className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg relative mt-10 mb-12"
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

            <div className=" absolute top-2 right-2">
              <button
                className=" text-red-500 cursor-pointer hover:text-red-700"
                onClick={() => deleteData(school.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
