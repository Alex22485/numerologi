import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataGet(key, setState) {
  try {
    const value = await AsyncStorage.getItem(key);
    console.log("value: ", value);
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
