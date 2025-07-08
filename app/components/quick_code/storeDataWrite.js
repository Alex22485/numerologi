import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataWrite(key, value) {
  // console.log("key: ", key);
  // console.log("value: ", value);

  try {
    const jsonValue = JSON.stringify(value);
    // console.log("jsonValue: ", jsonValue);
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
