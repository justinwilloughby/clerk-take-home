"use client";

import { useUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { useState } from "react";
import { completeOnboarding } from "./_actions";

export default function Onboarding() {
    const { user } = useUser();
    const [error, setError] = useState("");

    const handleSubmit = async (formData: FormData) => {
        const res = await completeOnboarding(formData);

        if (res?.message) {
            await user?.reload();
            redirect("/organization");
        }

        if (res?.error) {
            setError(res?.error);
        }
    }

    return (
        <div className="w-[400px] mx-auto shadow-2xl rounded-lg p-4">
            <h1 className="text-xl font-bold mb-4">Complete Sign Up</h1>
            <form action={handleSubmit} className="space-y-4">
                <div>
                    <label className="font-semibold">Birthday</label>
                    <p className="text-xs">Enter your birthday.</p>
                    <input type="date" name="birthday" required />
                </div>

                <div>
                    <label className="font-semibold">City/State</label>
                    <p className="text-xs">Enter your city and state.</p>
                    <input type="text" name="cityState" required />
                </div>
                {error && <p className="text-red-600">Error: {error}</p>}
                <button type="submit" className="p-2 rounded-lg bg-blue-500 text-white">Submit</button>
            </form>
        </div>
    );
}