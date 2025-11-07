import { UserProps } from "@/app/_utils/types";

export function handleSubmit(
    e: React.FormEvent<HTMLFormElement>,
    currentUser: UserProps,
    setCurrentUser: (user: UserProps) => void,
    updateUsers: (arr: UserProps[]) => void,
    users: UserProps[],
    setUsers: (arr: UserProps[]) => void
) {
    e.preventDefault();
    const post = new FormData(e.currentTarget).get("post") as string;

    if (!post.trim()) return;

    const updatedUser = {
        ...currentUser,
        posts: [...currentUser.posts, post.trim()],
    };

    setCurrentUser(updatedUser);

    const newUsers = users.map((u) =>
        u.userName === currentUser.userName ? updatedUser : u
    );

    updateUsers(newUsers);
    setUsers(newUsers);
}
