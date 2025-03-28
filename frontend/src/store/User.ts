import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserState {
  username: string;
  setUsername: (newUsername: string) => void;
}

export const useUserState = create<UserState>()(
  persist<UserState>(
    (set) => ({
      username: "",
      setUsername: (newUsername: string) => set(() => ({ username: newUsername })),
    }),
    {
      name: "user-storage", 
    }
  )
);