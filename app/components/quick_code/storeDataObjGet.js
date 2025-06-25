import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataObjGet(inputData, setState) {
  try {
    const value = await AsyncStorage.getItem(inputData["Телефон: +7"]);
    // console.log("value: ", value);
    if (value != null) {
      const valueParse = JSON.parse(value);
      // console.log("valueParse: ", valueParse);
      // сравнение введенного пароль и записанного в "БД" (фиктивную)
      const passwordOriginal = valueParse["Пароль:"];
      const passwordInputcurrent = inputData["Пароль:"];

      if (passwordOriginal === passwordInputcurrent) {
        setState({ ...valueParse, code: "succssess" });
      } else {
        setState({ code: "errorPassword" });
      }
    } else {
      setState({ code: "notAuth" });
    }
  } catch (e) {
    console.log("error local storage", e);
  }
}
