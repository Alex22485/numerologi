import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataGetFromServer(key) {
  try {
    const value = await AsyncStorage.getItem(key);

    if (value != null) {
      const valueParse = JSON.parse(value);
      return valueParse;
    } else {
      //! Может удалить этот else?
      console.log("Data not find");
    }
  } catch (e) {
    console.log("error local storage", e);
  }
}
