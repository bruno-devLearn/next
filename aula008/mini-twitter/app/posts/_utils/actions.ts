import { PostObj, UserProps } from "@/app/_utils/types";

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

    const date = new Date();

    const formatado = date.toLocaleString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    });

    const postObj: PostObj = {
        post: post.trim(),
        date: formatado,
        id: currentUser.posts.length + 1,
    };

    const updatedUser = {
        ...currentUser,
        posts: [...currentUser.posts, postObj],
    };

    setCurrentUser(updatedUser);

    const newUsers = users.map((u) =>
        u.userName === currentUser.userName ? updatedUser : u
    );

    updateUsers(newUsers);
    setUsers(newUsers);
}
