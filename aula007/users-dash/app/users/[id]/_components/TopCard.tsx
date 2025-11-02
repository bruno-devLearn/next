import { MdOutlineMailOutline } from "react-icons/md";
import { FiMapPin, FiPhone } from "react-icons/fi";
import { UsersProps } from "@/app/_utils/types";
import { GoGlobe } from "react-icons/go";
import { LuBuilding2 } from "react-icons/lu";

export function TopCard({ user }: { user: UsersProps }) {
    const userObj = [
        {
            icon: (
                <MdOutlineMailOutline className="lucide lucide-mail w-5 h-5 text-muted-foreground mt-0.5" />
            ),
            topText: "Email",
            bottomText: user.email,
        },
        {
            icon: (
                <FiPhone className="lucide lucide-phone w-5 h-5 text-muted-foreground mt-0.5" />
            ),
            topText: "Phone",
            bottomText: user.phone,
        },
        {
            icon: (
                <FiMapPin className="lucide lucide-map-pin w-5 h-5 text-muted-foreground mt-0.5" />
            ),
            topText: "Address",
            bottomText: `${user.address.street}, ${user.address.suite}<br>${user.address.city} ${user.address.zipcode}`,
        },
        {
            icon: (
                <GoGlobe className="lucide lucide-globe w-5 h-5 text-muted-foreground mt-0.5" />
            ),
            topText: "Website",
            bottomText: user.website,
        },
    ];

    return (
        <div className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border">
            <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
                <div className="flex items-center justify-between">
                    <h4 data-slot="card-title" className="leading-none">
                        {user.name}
                    </h4>
                    <span
                        data-slot="badge"
                        className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&amp;&gt;svg]:size-3 gap-1 [&amp;&gt;svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden border-transparent bg-secondary text-secondary-foreground [a&amp;]:hover:bg-secondary/90"
                    >
                        @{user.username}
                    </span>
                </div>
            </div>
            <div
                data-slot="card-content"
                className="px-6 [&:last-child]:pb-6 space-y-4"
            >
                <div className="grid gap-4 md:grid-cols-2">
                    {userObj.map((obj, i) => (
                        <div className="flex items-start gap-3" key={i}>
                            {obj.icon}
                            <div>
                                <p className="text-muted-foreground">
                                    {obj.topText}
                                </p>
                                <p>{obj.bottomText}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div
                    data-orientation="horizontal"
                    role="none"
                    data-slot="separator-root"
                    className="bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px"
                ></div>
                <div className="flex items-start gap-3">
                    <LuBuilding2 className="lucide lucide-building2 lucide-building-2 w-5 h-5 text-muted-foreground mt-0.5" />
                    <div>
                        <p className="text-muted-foreground">Company</p>
                        <p>{user.company.name}</p>
                        <p className="text-muted-foreground">
                            {user.company.catchPhrase}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
