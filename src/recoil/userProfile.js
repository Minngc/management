import { atom } from "recoil";

const TokenStore = atom({
  key: "Token",
  default: "",
})

const userProfileStore = atom({
  key: "userProfile",
  default: {},
})

const userStateStore = atom({
  key: "userState",
  default: localStorage.getItem("userState") ?? "offline",
})

export { TokenStore, userStateStore, userProfileStore };