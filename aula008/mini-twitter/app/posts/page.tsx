"use client";

import { useEffect } from "react";
import { useUser } from "../_utils/store";
import { useRouter } from "next/navigation";
import { getUsers, setUsers } from "../_utils/localStorage";
import "./posts.css";
import { handleSubmit } from "./_utils/actions";

export default function Page() {
    const { currentUser, setCurrentUser, updateUsers, users } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (currentUser.userName === "") {
            router.push("/");
        } else if (users.length === 0) {
            updateUsers(getUsers());
        }
    }, [currentUser, router, users, updateUsers]);

    useEffect(() => {
        console.log(users);
    }, [users]);

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
                <div className="post-list-section"></div>
            </div>
        </div>
    );
}
