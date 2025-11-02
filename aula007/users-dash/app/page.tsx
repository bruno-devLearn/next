import { FiUsers } from "react-icons/fi";

import { getUsers } from "./_utils/fecth";
import { Card } from "./_components/Card";
import { Suspense } from "react";
import Loading from "./loading";

export default async function Home() {
    const users = await getUsers();

    return (
        <Suspense fallback={<Loading />}>
            <div className="mb-8">
                <div className="flex items-center gap-3 mb-2">
                    <FiUsers className="lucide lucide-users w-8 h-8" />
                    <h1>Users Dashboard</h1>
                </div>
                <p className="text-muted-foreground">
                    Browse and manage users. Click on any user to view their
                    details and posts.
                </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
                {users.map((user) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </Suspense>
    );
}
