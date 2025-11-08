"use client";

import { getUsers, setUsers } from "./_utils/localStorage";
import { UserProps } from "./_utils/types";
import { useUser } from "./_utils/store";
import "./login.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
    const [input, setinput] = useState("");

    const { setCurrentUser, updateUsers } = useUser();
    const router = useRouter();

    async function handleSubmit(formData: FormData) {
        const userName = formData.get("username") as string;
        const users = getUsers();

        const userBase: UserProps = { userName, posts: [] };
        const exists = users.some((u) => u.userName === userName);

        const newUsers = exists ? users : [...users, userBase];

        setUsers(newUsers); // salva no localStorage
        updateUsers(newUsers); // sincroniza com o Zustand

        const user = newUsers.find((u) => u.userName === userName)!;

        setCurrentUser(user);
        router.push("/posts");
    }

    return (
        <div className="login-container">
            <div className="login-card">
                <div className="login-header">
                    <h1>Bem-vindo</h1>
                    <span>Entre com seu nome de usuário</span>
                </div>
                <form className="login-form" action={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="username" className="label-input">
                            Nome de usuário
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            className="input-field"
                            placeholder="Digite seu nome..."
                            value={input}
                            onChange={(e) => setinput(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="login-button"
                        disabled={!input.trim()}
                    >
                        Entrar
                    </button>
                </form>
            </div>
        </div>
    );
}
