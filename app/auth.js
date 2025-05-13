import { View, Text, StyleSheet } from "react-native";
import { BgColor, Title, Text_App, heightWindow } from "../components/tokens";
import Auth_form from "./components/auth/auth_form";
import Input_code_verification from "./components/code_Verification/input_code_verification";
import { useState } from "react";
import Quick_code from "./components/quick_code/quick_code";
import Quick_code_ver2 from "./components/quick_code/quick_code_ver2";

export default function Auth() {
  const [getCodeVerif, setGetCodeVerif] = useState({
    readyGetCode: false,
    inputAuthData: "",
    isShowQuickCodeView: false,
  });
  // console.log("getCodeVerif", getCodeVerif);
  // console.log("ppppp", getCodeVerif.inputAuthData);
  // console.log("ppppp", getCodeVerif.inputAuthData);
  const rr = "Ваше Имя:";
  console.log("00", getCodeVerif.inputAuthData);
  console.log("11", getCodeVerif.inputAuthData["Ваше Имя:"]);

  const onPressHandler = (inputValue) => {
    setGetCodeVerif({ readyGetCode: true, inputAuthData: inputValue });
  };

  const authForm = (
    <View style={styles.content}>
      <Text style={styles.title}>Авторизация</Text>
      <Auth_form onPressAuth={onPressHandler} />
    </View>
  );

  const onIsShowQuickCodeView = (item) => {
    setGetCodeVerif((pr) => {
      return { ...pr, isShowQuickCodeView: item };
    });
  };
  if (getCodeVerif.isShowQuickCodeView) {
    return (
      <Quick_code_ver2
        textContent={"Придумайте пароль быстрого входа"}
        name={getCodeVerif.inputAuthData["Ваше Имя:"]}
      />
    );
  }
  return getCodeVerif.readyGetCode ? (
    <Input_code_verification
      inputDataAuth={getCodeVerif.inputAuthData}
      onIsShowQuickCodeView={onIsShowQuickCodeView}
    />
  ) : (
    authForm
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BgColor.bgColor,
    alignItems: "center",
  },
  title: {
    marginTop: heightWindow * 0.0418,
    textAlign: "center",
    fontSize: Text_App.fs_34,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    color: Title.color_white,
  },
});
