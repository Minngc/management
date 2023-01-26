import { atom } from "recoil";

const userProfileStore = atom({
  key: "userProfile",
  default: {},
})

const userStateStore = atom({
  key: "userState",
  default: localStorage.getItem("userState") ?? "offline",
})

export { userStateStore, userProfileStore };