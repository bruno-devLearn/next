"use client";

import { useUser } from "../_utils/store";
import "./posts.css";

export default function Page() {
    const { currentUser } = useUser();

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
                    <button className="logout-button">Sair</button>
                </div>
                <div className="new-post-section">
                    <h2>Criar Novo Post</h2>
                    <form className="new-post-form">
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
