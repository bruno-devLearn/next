"use client";

import { useEffect, useState } from "react";
import { useUser } from "../_utils/store";
import { useRouter } from "next/navigation";
import { getUsers, setUsers } from "../_utils/localStorage";
import { handleSubmit } from "./_utils/actions";
import { EmptyState } from "./_components/PostCard";
import { PostList } from "./_components/PostList";
import "./posts.css";

export default function Page() {
    const { currentUser, setCurrentUser, updateUsers, users } = useUser();
    const [editingId, setEditingId] = useState<null | number>(null);
    const router = useRouter();

    useEffect(() => {
        if (currentUser.userName === "") {
            router.push("/");
        } else if (users.length === 0) {
            updateUsers(getUsers());
        }
    }, [currentUser, router, users, updateUsers]);

    return (
        <div className="posts-page">
            <div className="post-container">
                <div className="header">
                    <div className="header-user-info">
                        <h1>Meus Post</h1>
                        <span className="username">
                            @{currentUser.userName}
                        </span>
                    </div>
                    <button
                        className="logout-button"
                        onClick={() =>
                            setCurrentUser({ userName: "", posts: [] })
                        }
                    >
                        Sair
                    </button>
                </div>

                <div className="new-post-section">
                    <h2>Criar Novo Post</h2>
                    <form
                        className="new-post-form"
                        onSubmit={(e) => {
                            handleSubmit(
                                e,
                                currentUser,
                                setCurrentUser,
                                updateUsers,
                                users,
                                setUsers
                            );
                            e.currentTarget.reset();
                        }}
                    >
                        <textarea
                            name="post"
                            className="post-textarea"
                            placeholder="O que você está pensando?"
                        />
                        <button className="add-post-button">
                            Adicionar Post
                        </button>
                    </form>
                </div>

                <div className="post-list-section">
                    <h2>Seus Posts ({currentUser.posts.length})</h2>
                    <div className="post-list">
                        {currentUser.posts.length === 0 ? (
                            <EmptyState />
                        ) : (
                            <PostList
                                posts={currentUser.posts}
                                editingId={editingId}
                                setEditingId={setEditingId}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
