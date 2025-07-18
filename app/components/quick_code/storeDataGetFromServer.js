import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataGetFromServer(key) {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value != null) {
      const valueParse = JSON.parse(value);
      console.log("DataFrom_server: ", valueParse);
      return valueParse;
    } else {
      //! Может удалить этот else?
      console.log("storeDataGet: Кода быстрого ввода не найдено");
    }
  } catch (e) {
    console.log("error local storage", e);
  }
}
