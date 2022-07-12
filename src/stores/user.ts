import { defineStore } from "pinia";
import type { UserState } from "@/models/user";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    user: {
      id: 1,
      username: "Мама и Папа",
    } as UserState,
  }),
});
