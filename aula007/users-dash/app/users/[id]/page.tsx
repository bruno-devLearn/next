import { getUser } from "@/app/_utils/fecth";
import Loading from "@/app/loading";
import { Suspense } from "react";
import { BackBtn } from "./_components/BackBtn";
import { TopCard } from "./_components/TopCard";
import { BottomCard } from "./_components/BottomCard";

export default async function Page({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const user = await getUser(id);

    return (
        <Suspense fallback={<Loading />}>
            <BackBtn />
            <div className="space-y-6">
                <TopCard user={user} />
                <BottomCard id={id} />
            </div>
        </Suspense>
    );
}
