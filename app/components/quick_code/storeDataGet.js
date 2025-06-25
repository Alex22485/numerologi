import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

export default async function storeDataGet(key, setState) {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      setState((pr) => {
        return {
          ...pr,
          isShowQuickCodeView: true,
          textForQuickCodeView: "Введите код доступа",
          localStorageCode: value,
        };
      });
    } else {
      console.log("locStorage2", value);
    }
  } catch (e) {
    console.log("error local storage", e);
  }
}
