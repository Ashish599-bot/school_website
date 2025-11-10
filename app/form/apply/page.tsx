"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact_Number, setContact_Number] = useState("");
  const [year_experience, setYear_experience] = useState("");
  const [job_title, setJob_title] = useState("");
  const router = useRouter();

  const editData = async (e: any) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        name: name,
        email: email,
        contact_Number: contact_Number,
        year_experience: year_experience,
        job_title: job_title,
      }),
    });

    if (!res.ok) {
      const errorData = await res.json();
      return alert(`Failed to add: ${errorData.error || "Unknown error"}`);
    }

    alert("Added successfully");
    router.push("/contact_us");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Application Form
        </h2>

        <form onSubmit={editData} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Contact Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={contact_Number}
              onChange={(e) => setContact_Number(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">
              Years of Experience
            </label>
            <input
              type="text"
              placeholder="e.g., 3"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={year_experience}
              onChange={(e) => setYear_experience(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-1">Job Title</label>
            <input
              type="text"
              placeholder="e.g., math teacher"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={job_title}
              onChange={(e) => setJob_title(e.target.value)}
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700 cursor-pointer"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
