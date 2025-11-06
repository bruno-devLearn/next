import { create } from "zustand";
import { UserProps } from "./types";

interface StoreProps {
    currentUser: UserProps;
    setCurrentUser: (newUser: UserProps) => void;
}

export const useUser = create<StoreProps>((set) => ({
    currentUser: { userName: "", posts: [] },
    setCurrentUser: (newUser) => set({ currentUser: newUser }),
}));
