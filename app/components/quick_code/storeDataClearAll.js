import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataClearAll() {
  console.log("clearAll_storage");
  try {
    await AsyncStorage.clear();
  } catch (e) {
    // saving error
    console.log("ошибка записи в кода", e);
  }
}
