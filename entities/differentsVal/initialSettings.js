import { atom } from "jotai";

export const getCodeVerification = atom({
  readyGetCode: false,
  inputAuthData: "",
  isShowQuickCodeView: false,
  textForQuickCodeView: "Придумайте пароль быстрого входа",
  localStorageCode: "",
});
export const ini = atom({
  readyGetCode: false,
  inputAuthData: "",
  isShowQuickCodeView: false,
  textForQuickCodeView: "Придумайте пароль быстрого входа",
  localStorageCode: "",
});
