import { TokenStore, userProfileStore, userStateStore } from "../recoil/userProfile";
import { useRecoilState } from "recoil";

function useUserState() {
  
  return useRecoilState(userStateStore)
}

function useUserProfile() {
  return useRecoilState(userProfileStore)
}

function useToken() {

  return useRecoilState(TokenStore)
}


export { useUserState, useToken, useUserProfile };