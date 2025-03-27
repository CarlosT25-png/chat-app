import { create } from "zustand";

interface UserState {
  username: string;
  setUsername: (newUsername: string) => void;
}

export const useUserState = create<UserState>((set) => ({
  username: "",
  setUsername: (newUsername: string) => set(() => ({username: newUsername}))
}));
