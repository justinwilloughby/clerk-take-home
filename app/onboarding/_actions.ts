"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export const completeOnboarding = async (formData: FormData) => {
    const { userId } = auth();

    if (!userId) {
        return { message: "No Logged In User" };
    }

    try {
        const res = await clerkClient().users.updateUser(userId, {
            publicMetadata: {
                onboardingComplete: true,
                birthday: formData.get("birthday"),
                cityState: formData.get("cityState"),
            }
        });

        return { message: res.publicMetadata }
    } catch (err) {
        return {
            error: "There was an error updating the user's public metadata."
        }
    }
}