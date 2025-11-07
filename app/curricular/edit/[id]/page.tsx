'use client'
import { useState } from "react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Update() {
    const [formData, setFormData] = useState({
        name: "",
        noOfStudent: "",
        coordinator: "",
        activity: ""
    });
    const params = useParams();
    const { id } = params;
    const router = useRouter();

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const res = await fetch(`http://localhost:3000/api/curricular/${id}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(formData)
        });
        router.push("/curricular")
        if (res.ok) {
            alert('update successfully')
        }
        else {
            alert('fail to update')
        }
    }

    return (
        <main className="min-h-screen flex items-center justify-center">
            <div className="h-100 w-100 border grid place-items-center mt-10 rounded-2xl">
                <h1>Update Details</h1>
                <form onSubmit={submitHandler} className="flex flex-col items-center justify-center space-y-3">
                    <input type="text"
                        placeholder='enter name of programme'
                        className="border "
                        name="name of programme"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

                    <input type="text"
                        placeholder='enter number of student'
                        name="number of student"
                        className="border "
                        value={formData.noOfStudent}
                        onChange={(e) => setFormData({ ...formData, noOfStudent: e.target.value })} />

                    <input type="text"
                        placeholder='enter coordinator'
                        name="coordinator"
                        className="border "
                        value={formData.coordinator}
                        onChange={(e) => setFormData({ ...formData, coordinator: e.target.value })} />

                    <input type="text"
                        placeholder='enter activity'
                        name="activity"
                        className="border "
                        value={formData.activity}
                        onChange={(e) => setFormData({ ...formData, activity: e.target.value })} />

                    <button type="submit" className="hover:text-green-500">
                        submit
                    </button>
                </form>
            </div>
        </main>
    )
}