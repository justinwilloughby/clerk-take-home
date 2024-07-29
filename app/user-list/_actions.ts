"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export const getUsers = async () => {
    const { userId } = auth();

    if (!userId) {
        return { users: [], message: "No logged in user" }
    }

    let emails = [] as string[];

    const pageLimit = 10;

    let users = await clerkClient().users.getUserList({
        limit: pageLimit,
        orderBy: '-created_at',
    });

    emails = emails.concat(users.data.map((entry) => {
        return entry.emailAddresses[0].emailAddress;
    }));

    const pages = Math.floor(users.totalCount / pageLimit);

    if (pages > 1) {
        for (let i = 1; i <= pages; i++) {
            const nextUsers = await clerkClient().users.getUserList({
                limit: pageLimit,
                orderBy: '-created_at',
                offset: pageLimit * i
            });

            emails = emails.concat(nextUsers.data.map((entry) => {
                return entry.emailAddresses[0].emailAddress;
            }));
        }
    }

    return {
        users: emails,
        message: "",
    };
};