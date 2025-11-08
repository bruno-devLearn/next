import { create } from "zustand";
import { UserProps } from "./types";

interface StoreProps {
    users: UserProps[];
    updateUsers: (newArr: UserProps[]) => void;
    currentUser: UserProps;
    setCurrentUser: (newUser: UserProps) => void;
}

export const useUser = create<StoreProps>((set) => ({
    users: [],
    updateUsers: (newArr) => set({ users: newArr }),
    currentUser: { userName: "", posts: [] },
    setCurrentUser: (newUser) => set({ currentUser: newUser }),
}));
