import Link from "next/link";
import { UsersProps } from "../_utils/types";

export function Card({ user }: { user: UsersProps }) {
    return (
        <Link
            href={`/users/${user.id}`}
            className="transition-transform hover:scale-[1.02]"
            data-discover="true"
        >
            <div
                data-slot="card"
                className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border h-full hover:shadow-lg transition-shadow cursor-pointer"
            >
                <div
                    data-slot="card-header"
                    className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
                >
                    <h4 data-slot="card-title" className="leading-none">
                        {user.name}
                    </h4>
                </div>
                <div
                    data-slot="card-content"
                    className="px-6 [&:last-child]:pb-6"
                >
                    <div className="space-y-1">
                        <p className="text-muted-foreground">
                            @{user.username}
                        </p>
                        <p className="text-muted-foreground">{user.email}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
}
