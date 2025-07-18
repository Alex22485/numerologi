import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataWrite(key, value) {
  console.log("storeDataWrite_key_value: ", key, ": ", value);
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    console.log("error save obj in local stage");
  }
}

// ! Старый код до 07.07.25
// export default async function storeDataWrite(value) {
//   console.log("storeData", value);
//   try {
//     await AsyncStorage.setItem("code", value);
//   } catch (e) {
//     // saving error
//     console.log("ошибка записи в кода", e);
//   }
// }
