import { create } from "zustand";
import { UserDetailsResponse } from "./types";

interface ExplorerProps {
    id: string | undefined;
    user: UserDetailsResponse | undefined;
    loading: boolean;
    error: boolean;
    setId: (newValue: string | undefined) => void;
    setLoading: (newValue: boolean) => void;
    setError: (newValue: boolean) => void;
    setUser: (newUser: UserDetailsResponse | undefined) => void;
}

export const useExplorer = create<ExplorerProps>((set) => ({
    id: undefined,
    user: undefined,
    loading: false,
    error: false,
    setId: (newValue) => set({ id: newValue }),
    setLoading: (newValue) => set({ loading: newValue }),
    setError: (newValue) => set({ error: newValue }),
    setUser: (newUser) => set({ user: newUser }),
}));
