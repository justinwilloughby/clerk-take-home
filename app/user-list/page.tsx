"use client";

import { useState } from "react";
import { getUsers } from "./_actions";


export default function UserList() {
    
    const [users, setUsers] = useState([] as string[]);

    const onSubmit = async () => {
        const { users, message } = await getUsers();

        if (message) {
            console.error(message);
            return;
        }

        setUsers(users);
    }

    return (
        <div className="w-[400px] mx-auto shadow-2xl rounded-lg p-4">
            <h1 className="text-xl font-bold mb-4">Email Addresses</h1>
            <form action={onSubmit}>
                <button type="submit" className="p-2 rounded-lg bg-blue-500 text-white">Get Emails</button>
            </form>
            <div className="flex flex-col space-y-1 p-2">
                {users.map((user) => {
                    return (
                        <div>{user}</div>
                    )
                })}
            </div>
        </div>
    );
}