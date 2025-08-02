import AsyncStorage from "@react-native-async-storage/async-storage";
import storeDataGetFromServer from "./storeDataGetFromServer";

export default async function storeDataGet(key, setState) {
  //! Новый код с код до 07.07.25
  try {
    const value = await AsyncStorage.getItem(key);

    if (value != null) {
      const quickCode = JSON.parse(value);

      // 14/07/25 получаем данные с сервера
      if (quickCode.phone) {
        const dataUser = await storeDataGetFromServer(quickCode.phone);
        return [dataUser, quickCode];
      } else {
        return "";
      }
    } else {
      //! Может удалить этот else?
      console.log("storeDataGet: Кода быстрого ввода не найден");
    }
  } catch (e) {
    console.log("error local storage", e);
  }
}
