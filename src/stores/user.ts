import { defineStore } from "pinia";
import { useRoute } from "vue-router";

type usersList = { [key: string]: string };

const USERS_LIST = {
  "1": "Дорогие Мама и Папа",
  "2": "Дорогие Мама и Папа",
  "3": "Дорогие Эльмира и Максим",
  "4": "Дорогой Анвар",
  "5": "Дорогая Тётя Надя",
  "6": "Дорогие Анастасия и Артём",
  "7": "Дорогие Анастасия и Владислав",
  "8": "Дорогие Юлия и Дмитрий",
  "9": "Дорогие Анжелика и Дмитрий",
  "10": "Дорогие Азалия и Константин",
  "11": "Дорогие Екатерина и Николай",
  "12": "Дорогая Мария",
  "13": "Дорогой Кирилл",
  "14": "Дорогой Андрей",
  "15": "Дорогая Анастасия",
  "16": "Дорогие Анна и Максим",
  "17": "Дорогая Татев",
  "18": "Дорогой Евгений",
  "19": "Дорогой Павел",
  "20": "Дорогие Елена и Михаил",
  "21": "Дорогой Максим",
  "22": "Дорогой Евгений",
  "23": "Дорогой Данил",
  "24": "Дорогой Александр",
  "25": "Дорогой Николай",
} as usersList;

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    usersList: {} as usersList,
    currentUser: undefined as undefined | string,
  }),
  getters: {
    userName(): string {
      return this.currentUser ? USERS_LIST[this.currentUser] : "Дорогой гость";
    },
  },
  actions: {
    setCurrentUser() {
      const route = useRoute();
      this.currentUser = route.params.user as string;
    },
  },
});
