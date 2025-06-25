import AsyncStorage from "@react-native-async-storage/async-storage";

export default async function storeDataObjWrite(value) {
  console.log("ggggg", value);
  try {
    const jsonValue = JSON.stringify(value);
    console.log("SS", `${value["Телефон: +7"]}`);
    await AsyncStorage.setItem(`${value["Телефон: +7"]}`, jsonValue);
  } catch (e) {
    console.log("error save obj in local stage");
  }

  // console.log("storeDataObj", value);
  // try {
  //   const jsonValue = JSON.stringify(value);
  //   console.log("jsonValue: ", jsonValue);
  //   await AsyncStorage.setItem("userData", jsonValue);
  //   setState(valueState);
  // } catch (e) {
  //   // saving error
  //   console.log("ошибка записи объекта в кода", e);
  // }
}
