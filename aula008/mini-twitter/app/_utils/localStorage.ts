import { UserProps } from "./types";

export const getUsers = (): UserProps[] =>
    JSON.parse(localStorage.getItem("users") || "[]");

export const setUsers = (users: UserProps[]): void =>
    localStorage.setItem("users", JSON.stringify(users));
