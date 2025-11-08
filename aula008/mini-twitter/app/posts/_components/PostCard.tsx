import { setUsers } from "@/app/_utils/localStorage";
import { useUser } from "@/app/_utils/store";
import { PostObj } from "@/app/_utils/types";
import { useState } from "react";

type CardProps = {
    post: PostObj;
    setEditingId: Dispatch<SetStateAction<number | null>>;
};

export function PostCard({ post, setEditingId }: CardProps) {
    const { currentUser, setCurrentUser, users, updateUsers } = useUser();

    const handleClick = () => {
        const posts = currentUser.posts.filter((p) => p !== post);
        const updatedUser = { ...currentUser, posts };

        setCurrentUser(updatedUser);

        const updatedUsers = users.map((u) =>
            u.userName === updatedUser.userName ? updatedUser : u
        );

        updateUsers(updatedUsers);
        setUsers(updatedUsers);
    };

    return (
        <div className="post-card card">
            <div className="post-content">
                <div className="text">{post.post}</div>
                <div className="date">{post.date}</div>
            </div>
            <div className="post-actions">
                <button
                    className="edit btn"
                    onClick={() => {
                        setEditingId(post.id);
                    }}
                >
                    Editar
                </button>
                <button className="delete btn" onClick={handleClick}>
                    Excluir
                </button>
            </div>
        </div>
    );
}

export function EditCard({ post, setEditingId }: CardProps) {
    const [inputValue, setInputValue] = useState(post.post);

    const { currentUser, setCurrentUser, users, updateUsers } = useUser();

    const handleClick = () => {
        const posts = currentUser.posts.map((p) =>
            p.id === post.id ? { ...p, post: inputValue } : p
        );

        const updatedUser = { ...currentUser, posts: posts };

        setCurrentUser(updatedUser);

        const updatedUsers = users.map((u) =>
            u.userName === updatedUser.userName ? updatedUser : u
        );

        updateUsers(updatedUsers);
        setUsers(updatedUsers);
        setEditingId(null);
    };

    return (
        <div className="edit-card card">
            <textarea
                className="textarea"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="post-actions">
                <button className="save btn" onClick={handleClick}>
                    Salvar
                </button>
                <button
                    className="cancel btn"
                    onClick={() => {
                        setEditingId(null);
                    }}
                >
                    cancelar
                </button>
            </div>
        </div>
    );
}

export function EmptyState() {
    return (
        <div className="empty">
            <p>Você ainda não tem posts. Crie seu primeiro post acima!</p>
        </div>
    );
}
