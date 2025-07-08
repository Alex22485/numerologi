import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataGet(key, setState) {
  //! Новый код с код до 07.07.25
  try {
    const value = await AsyncStorage.getItem(key);
    // console.log("sDG_value: ", value);

    if (value != null) {
      const valueParse = JSON.parse(value);
      // console.log("sDG_valueParse: ", valueParse);
      setState((pr) => {
        return {
          ...pr,
          inputAuthData: valueParse.userInfo,
          isShowQuickCodeView: true,
          textForQuickCodeView: "Введите код доступа",
          localStorageCode: valueParse.code,
        };
      });
    } else {
      //! Может удалисть этот else?
      // setState({ code: "notAuth" });
    }
  } catch (e) {
    console.log("error local storage", e);
  }
}

//! Старый код до 07.07.25
// export default async function storeDataGet(key, setState) {
//   try {
//     const value = await AsyncStorage.getItem(key);
//     if (value !== null) {
//       setState((pr) => {
//         return {
//           ...pr,
//           isShowQuickCodeView: true,
//           textForQuickCodeView: "Введите код доступа",
//           localStorageCode: value,
//         };
//       });
//     } else {
//       console.log("locStorage2", value);
//     }
//   } catch (e) {
//     console.log("error local storage", e);
//   }
// }
