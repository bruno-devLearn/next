import { getUserPosts } from "@/app/_utils/fecth";
import { LuFileText } from "react-icons/lu";

export async function BottomCard({ id }: { id: string }) {
    const posts = await getUserPosts(id);

    return (
        <div
            data-slot="card"
            className="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border"
        >
            <div
                data-slot="card-header"
                className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6"
            >
                <div className="flex items-center gap-2">
                    <LuFileText className="lucide lucide-file-text w-5 h-5" />
                    <h4 data-slot="card-title" className="leading-none">
                        User Posts ({posts.length})
                    </h4>
                </div>
            </div>
            <div className="px-6 [&:last-child]:pb-6" data-slot="card-content">
                <div className="space-y-4">
                    {posts.map((post, i) => (
                        <div key={post.id}>
                            {i !== 0 && i !== posts.length - 1 && (
                                <div
                                    data-orientation="horizontal"
                                    role="none"
                                    data-slot="separator-root"
                                    className="bg-border shrink-0 h-px w-full my-4"
                                />
                            )}

                            <div className="space-y-2">
                                <h3 className="capitalize">{post.title}</h3>
                                <p className="text-muted-foreground">
                                    {post.body}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
