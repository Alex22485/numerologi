import { View, Text, StyleSheet } from "react-native";
import { BgColor, Title, Text_App, heightWindow } from "../components/tokens";
import Auth_form from "./components/auth/auth_form";
import Input_code_verification from "./components/code_Verification/input_code_verification";
import { useState } from "react";

export default function Auth() {
  const [getCodeVerif, setGetCodeVerif] = useState({
    readyGetCode: false,
    inputAuthData: "",
  });

  const onPressHandler = (inputValue) => {
    setGetCodeVerif({ readyGetCode: true, inputAuthData: inputValue });
  };

  const authForm = (
    <View style={styles.content}>
      <Text style={styles.title}>Авторизация</Text>
      <Auth_form onPressAuth={onPressHandler} />
    </View>
  );
  return getCodeVerif.readyGetCode ? (
    <Input_code_verification inputDataAuth={getCodeVerif.inputAuthData} />
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
