"use client";
import { useState, useEffect } from "react";
import Link from 'next/link';
export default function Extra() {
  const [data, setData] = useState<any[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/curricular");
      const result = await response.json();
      setData(result.data);
      console.log(result);
    } catch (error) {
      console.error({ Message: "error fetching" });
    }
    
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <main className="min-h-screen">
            <h1 className="text-blue-400 font-bold text-2xl flex items-center justify-center mt-4">List of Extra-Curricular Activity</h1>
            <Link href="curricular/add" className="text-xl flex justify-end hover:text-blue-300 hover:underline">Add Programme</Link>
            <div className="p-6 flex flex-col gap-5">
                {data.map(items => (
                    <div key={items.id} className="p-10 grid grid-cols-3 gap-5 border bg-gray-800 rounded ml-30 mr-30">
                        <div className="bg-gray-600 rounded-3xl p-4 col-span-2">
                            <h1>Sl.No:{items.id}</h1>
                            <h1 className="font-bold">Name of extra-curricular: {items.name}</h1>
                            <h1>Corrdinator: {items.coordinator}</h1>
                            <h1>Number of Student: {items.noOfStudent}</h1>
                            <h1>Activity: {items.activity}</h1>
                        </div>
                        <div className="flex items-center justify-center gap-4 text-xl">
                            <h1 className="text-blue-500 hover:text-white hover:underline">Update Details</h1>
                            <h1 className="text-red-500 hover:text-white hover:underline">Delete</h1>
                        </div>

                    </div>
                ))}

            </div>
        </main>
    )
}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <main className="min-h-screen">
      <h1 className="text-blue-400 font-bold text-2xl flex items-center justify-center mt-4">
        List of Extra-Curricular Activity
      </h1>
      <div className="p-6 flex flex-col gap-5">
        {data.map((items) => (
          <div
            key={items.id}
            className="p-4 grid grid-cols-2 gap-5 border bg-gray-800 rounded ml-30 mr-30"
          >
            <div className="bg-gray-600 rounded-3xl p-4">
              <h1>Sl.No:{items.id}</h1>
              <h1 className="font-bold">
                Name of extra-curricular: {items.name}
              </h1>
              <h1>Corrdinator: {items.coordinator}</h1>
              <h1>Number of Student: {items.noOfStudent}</h1>
              <h1>Activity: {items.activity}</h1>
            </div>
            <div></div>
          </div>
        ))}
        ;
      </div>
    </main>
  );
}
