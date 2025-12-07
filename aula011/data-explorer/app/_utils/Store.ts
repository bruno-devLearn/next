import { create } from "zustand";

interface ExplorerProps {
    id: string | undefined;
    loading: boolean;
    setId: (newValue: string | undefined) => void;
}

export const useExplorer = create<ExplorerProps>((set) => ({
    id: undefined,
    setId: (newValue) => set({ id: newValue }),
}));
