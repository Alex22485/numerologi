import { View, Text, StyleSheet } from "react-native";
import { BgColor, Title, Text_App, heightWindow } from "../components/tokens";
import Input_code_verification from "./components/code_Verification/input_code_verification";
import { useEffect, useState } from "react";
import Quick_code_ver2 from "./components/quick_code/quick_code_ver2";
import Auth_form from "./components/auth/auth_form";
import storeDataGet from "./components/quick_code/storeDataGet";
import Quick_code_ver2_copy from "./components/quick_code/quick_code_ver2_copy";

export default function Auth() {
  const initialSettings = {
    readyGetCode: false,
    inputAuthData: "",
    isShowQuickCodeView: false,
    textForQuickCodeView: "Придумайте пароль быстрого входа",
    localStorageCode: "",
  };
  const [getCodeVerif, setGetCodeVerif] = useState(initialSettings);

  // проверка при запуске есть ли в localStorage quickCode
  useEffect(() => {
    storeDataGet("code", setGetCodeVerif);
  }, []);

  // преход на сраницу получения кода авторизации
  const onPressHandler = (inputValue) => {
    setGetCodeVerif((pr) => {
      return { ...pr, readyGetCode: true, inputAuthData: inputValue };
    });
  };

  const authForm = (
    <View style={styles.content}>
      <Text style={styles.title}>Авторизация</Text>
      <Auth_form onPressAuth={onPressHandler} />
    </View>
  );

  // Переход на модуль быстрого входа
  const onIsShowQuickCodeView = (item) => {
    setGetCodeVerif((pr) => {
      return { ...pr, isShowQuickCodeView: item };
    });
  };

  // Переход на модуль авторизации
  const inputWithMainPassword = () => {
    setGetCodeVerif(initialSettings);
  };

  return getCodeVerif.isShowQuickCodeView ? (
    // <Quick_code_ver2
    <Quick_code_ver2_copy
      getCodeVerif={getCodeVerif}
      OnInputWithMainPassword={inputWithMainPassword}
    />
  ) : getCodeVerif.readyGetCode ? (
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
