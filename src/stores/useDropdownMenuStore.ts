import { create } from "zustand";

interface IDropdownState {
  dropdownOpen: boolean | null;
  setDropdownOpen: (isOpen: boolean) => void;
  toggleMenu: () => void;
}

const useDropdown = create<IDropdownState>((set) => ({
  dropdownOpen: null,
  setDropdownOpen: (isOpen) => set((state) => ({ dropdownOpen: isOpen })),
  toggleMenu: () => set((state) => ({ dropdownOpen: !state.dropdownOpen })),
}));
