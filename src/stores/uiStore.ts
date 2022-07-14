import { defineStore } from "pinia";

export const useUiStore = defineStore({
  id: "UiStore",
  state: () => ({
    currentPage: "main-page",
  }),

  actions: {
    setCurrentPage(page: string) {
      this.currentPage = page;
    },
  },
});
