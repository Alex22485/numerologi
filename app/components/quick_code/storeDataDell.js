import AsyncStorage from "@react-native-async-storage/async-storage";

// Выход из акаунта, удаление быстрого кода доступа
export default async function storeDataDell(value) {
  console.log("remove");
  try {
    await AsyncStorage.removeItem(value);
  } catch (e) {
    // remove error
  }
  OnInputWithMainPassword();
  console.log("Done.");
}
