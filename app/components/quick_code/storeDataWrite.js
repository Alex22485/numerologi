import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataWrite(value) {
  console.log("storeData", value);
  try {
    await AsyncStorage.setItem("code", value);
  } catch (e) {
    // saving error
    console.log("ошибка записи в кода", e);
  }
}
