import { View, Text, StyleSheet } from "react-native";
import { BgColor, Title, Text_App, heightWindow } from "../components/tokens";
import Input_code_verification from "./components/code_Verification/input_code_verification";
import { useEffect, useState } from "react";
import storeDataGet from "./components/quick_code/storeDataGet";
import Quick_code_ver3 from "./components/quick_code/quick_code_ver3";
import storeDataObjGet from "./components/quick_code/storeDataObjGet";
import Auth_form_Universal from "./Auth_form_Universal";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Auth() {
  const initialSettings = {
    readyGetCode: false,
    inputAuthData: "",
    isShowQuickCodeView: false,
    textForQuickCodeView: "Придумайте пароль быстрого входа",
    localStorageCode: "",
  };
  const [getCodeVerif, setGetCodeVerif] = useState(initialSettings);

  // !!!проверка при запуске есть ли в localStorage quickCode
  useEffect(() => {
    storeDataGet("code", setGetCodeVerif);
  }, []);

  // преход на сраницу получения кода авторизации и записи данных пользователя в localStorage
  const onPressHandler = (inputValue) => {
    // !Рабочий кода
    setGetCodeVerif((pr) => {
      return { ...pr, readyGetCode: true, inputAuthData: inputValue };
    });
  };

  const authForm = (
    <View style={styles.content}>
      <Text style={styles.title}>Авторизация</Text>
      <Auth_form_Universal
        includeForm={["Ваше Имя:", "Телефон: +7", "Email:", "Пароль:"]}
        btnText={"Создать аккаунт"}
        textUnderBtn={["Уже зарегистрировались?", "Войти"]}
        onPressAuth={onPressHandler}
      />
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
    // 3_страница ввода пароля быстрого доступа
    <Quick_code_ver3
      getCodeVerif={getCodeVerif}
      OnInputWithMainPassword={inputWithMainPassword}
    />
  ) : getCodeVerif.readyGetCode ? (
    // 2_страница получения пароля для авторизации
    <Input_code_verification
      inputDataAuth={getCodeVerif.inputAuthData}
      onIsShowQuickCodeView={onIsShowQuickCodeView}
    />
  ) : (
    // 1_страница авторизации
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
