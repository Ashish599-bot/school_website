"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Contact() {
  const [inform, setInform] = useState<any[] | null>(null);
  const [name, setName] = useState("");
  const [show, setShow] = useState(null);
  const [showName, setShowName] = useState({ name: " " });
  const [showMore, setShowMore] = useState(false);
  const [email, setEmail] = useState("");
  const [contact_Number, setContact_Number] = useState("");
  const [year_experience, setYear_experience] = useState("");
  const [job_title, setJob_title] = useState("");
  const [open, setOpen] = useState(null);

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
    fetchDetails();
    setShow(null);
  };

  const sn = async (n: any) => {
    setShowName(n);
  };

  const updateData = async (e: any, id: number) => {
    e.preventDefault();

    const res = await fetch(`/api/update/${id}`, {
      method: "PUT",
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
      return alert("Failed to update");
    } else {
      setName("");
      setEmail("");
      setContact_Number("");
      setYear_experience("");
      setJob_title("");
      setOpen(null);
      fetchDetails();

      alert("Detail updated successfully");
    }
  };
  return (
    <div>
      <div className=" flex justify-end items-end mr-6 mt-4 relative">
        <button
          onClick={() => setShowMore(!showMore)}
          className=" cursor-pointer hover:text:black"
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
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
        {showMore && (
          <div className="absolute top-full right-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg p-3 flex flex-col gap-2">
            <button className="bg-green-500 text-white px-3 py-1 rounded-lg hover:bg-green-600">
              <Link href="/form/apply">Apply</Link>
            </button>
          </div>
        )}
      </div>

      {/* Search Input */}
      <div className="flex gap-4 justify-center items-center  mb-10">
        <input
          className="py-2 px-4 shadow-lg rounded-xl border border-black bg-white text-black"
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

      {/* Grid of Schools */}
      <div className="min-h-screen grid grid-cols-4 gap-6 mb-20">
        {inform?.map((school, index) => (
          <div
            key={school.id}
            className="max-w-sm mx-auto h-[320px] bg-white rounded-2xl shadow-lg relative mt-10 mb-12"
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

            <div className=" absolute top-2 right-2 grid">
              <button
                className=" text-red-500 cursor-pointer hover:text-red-700"
                onClick={() => [setShow(school.id), sn(school)]}
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
              <button
                onClick={() =>
                  open === school.id ? setOpen(null) : setOpen(school.id)
                }
                className="text-green-400 mt-2 cursor-pointer hover:text-green-600"
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
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
            </div>
            {open === school.id && (
              <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                <div className="bg-white p-6 rounded-lg shadow-xl w-[400px]">
                  <h1 className="text-2xl font-bold mb-4">Edit Details</h1>

                  <form onSubmit={(e) => updateData(e, school.id)}>
                    <input
                      className="border p-2 w-full mb-3 rounded"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />

                    <input
                      className="border p-2 w-full mb-3 rounded"
                      placeholder="Job Title"
                      value={job_title}
                      onChange={(e) => setJob_title(e.target.value)}
                    />

                    <input
                      className="border p-2 w-full mb-3 rounded"
                      placeholder="Contact"
                      value={contact_Number}
                      onChange={(e) => setContact_Number(e.target.value)}
                    />

                    <input
                      className="border p-2 w-full mb-3 rounded"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                      className="border p-2 w-full mb-3 rounded"
                      placeholder="Years Exp"
                      value={year_experience}
                      onChange={(e) => setYear_experience(e.target.value)}
                    />

                    <button
                      type="submit"
                      className="w-full bg-blue-500 text-white p-2 rounded mt-3 hover:bg-blue-600 cursor-pointer"
                    >
                      Save
                    </button>

                    <button
                      type="button"
                      onClick={() => setOpen(null)}
                      className="w-full bg-gray-300 text-black p-2 rounded mt-3 hover:bg-gray-400 cursor-pointer"
                    >
                      Cancel
                    </button>
                  </form>
                </div>
              </div>
            )}

            {show && (
              <div className="fixed inset-0 flex items-center justify-center bg-black">
                <div className="bg-white p-6 rounded-lg shadow-lg">
                  <p className="text-lg font-medium mb-4">
                    Are you sure you want to delete{" "}
                    <span className="font-bold">"{showName.name}"</span>?
                  </p>
                  <div className="flex justify-end gap-3">
                    <button
                      onClick={() => setShow(null)}
                      className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={() => deleteData(show)}
                      className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 cursor-pointer"
                    >
                      Confirm
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
