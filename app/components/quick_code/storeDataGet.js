import AsyncStorage from "@react-native-async-storage/async-storage";
import storeDataGetFromServer from "./storeDataGetFromServer";

export default async function storeDataGet(key, setState) {
  //! Новый код с код до 07.07.25
  try {
    const value = await AsyncStorage.getItem(key);

    if (value != null) {
      const quickCode = JSON.parse(value);
      console.log("sDG_valueParse: ", quickCode);
      console.log("quickCode.phone: ", quickCode.phone);

      // 14/07/25 получаем данные с сервера
      if (quickCode.phone) {
        const dataUser = await storeDataGetFromServer(quickCode.phone);
        return [dataUser, quickCode];
      } else {
        return "";
      }

      // console.log("dataServer", dataFromServer);

      // записываем данные в atom ATOM
      // setGetCodeVerif((pr) => {
      //   return { ...pr, inputAuthData: dataFromServer };
      // });

      // setState((pr) => {
      //   return {
      //     ...pr,
      //     inputAuthData: valueParse.userInfo,
      //     isShowQuickCodeView: true,
      //     textForQuickCodeView: "Введите код доступа",
      //     localStorageCode: valueParse.code,
      //   };
      // });
    } else {
      //! Может удалить этот else?
      console.log("storeDataGet: Кода быстрого ввода не найдено");
    }
  } catch (e) {
    console.log("error local storage", e);
  }
}
