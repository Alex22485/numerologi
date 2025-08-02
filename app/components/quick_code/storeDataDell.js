import AsyncStorage from "@react-native-async-storage/async-storage";

// Выход из акаунта, удаление быстрого кода доступа
export default async function storeDataDell(value) {
  console.log("Удаление быстрого кода доступа");
  try {
    await AsyncStorage.removeItem(value);
  } catch (e) {
    // remove error
  }
  console.log("Done.");
}
