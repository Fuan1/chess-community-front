import { create } from "zustand";

interface SidebarState {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  open: () => void;
}

type SidebarActions = {
  toggle: () => void;
  close: () => void;
  open: () => void;
};

export const useSidebarStore = create<SidebarState & SidebarActions>((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set({ isOpen: false }),
  open: () => set({ isOpen: true }),
}));
