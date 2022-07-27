import { defineStore } from "pinia";
import { useRoute } from "vue-router";

type usersList = { [key: string]: string };

const USERS_LIST = {
  galina_and_gennady: "Дорогие Мама и Папа",
  anna_and_dmitry: "Дорогие Мама и Папа",
  elmira_and_maxim: "Дорогие Эльмира и Максим",
  anwar: "Дорогой Анвар",
  nadezhda: "Дорогая Тётя Надя",
  anastasia_and_artyom: "Дорогие Анастасия и Артём",
  anastasia_and_vladislav: "Дорогие Анастасия и Владислав",
  julia_and_dmitry: "Дорогие Юлия и Дмитрий",
  angelica_and_dmitry: "Дорогие Анжелика и Дмитрий",
  azalea_and_konstantin: "Дорогие Азалия и Константин",
  catherine_and_nikolai: "Дорогие Екатерина и Николай",
  maria: "Дорогая Мария",
  kirill: "Дорогой Кирилл",
  andrew: "Дорогой Андрей",
  anastasia: "Дорогая Анастасия",
  anna_and_maxim: "Дорогие Анна и Максим",
  tatev: "Дорогая Татев",
  evgeniyb: "Дорогой Евгений",
  paul: "Дорогой Павел",
  elena_and_mikhail: "Дорогие Елена и Михаил",
  maxim: "Дорогой Максим",
  evgeniych: "Дорогой Евгений",
  danil: "Дорогой Данил",
  alexander: "Дорогой Александр",
  nikolai: "Дорогой Николай",
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
      this.currentUser = (route.params.user as string).toLowerCase();
    },
  },
});
