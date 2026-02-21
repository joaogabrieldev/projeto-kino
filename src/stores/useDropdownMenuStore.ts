import { create } from "zustand";

interface IDropdownState {
  dropdownOpen: boolean;
  setDropdownOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
}

export const useDropdown = create<IDropdownState>((set) => ({
  dropdownOpen: false,
  setDropdownOpen: (isOpen) => set({ dropdownOpen: isOpen }),
  toggleMenu: () => set((state) => ({ dropdownOpen: !state.dropdownOpen })),
}));
