import { userProfileStore, userStateStore } from "../recoil/userProfile";
import { useRecoilState } from "recoil";

function useUserState() {
  return useRecoilState(userStateStore);
}

function useUserProfile() {
  return useRecoilState(userProfileStore);
}

export { useUserState, useUserProfile };
