import { View, Text, StyleSheet } from "react-native";
import { BgColor, Title, Text_App, heightWindow } from "../components/tokens";
import Input_code_verification from "./components/code_Verification/input_code_verification";
import { useEffect } from "react";
import storeDataGet from "./components/quick_code/storeDataGet";
import Quick_code_ver3 from "./components/quick_code/quick_code_ver3";
import Auth_form_Universal from "./Auth_form_Universal";
import { useAtom } from "jotai";
import { getCodeVerification } from "../entities/differentsVal/initialSettings";

export default function Auth() {
  const [getCodeVerif, setGetCodeVerif] = useAtom(getCodeVerification);
  console.log("getCodeVerif: ", getCodeVerif);

  // !!!проверка при запуске есть ли в localStorage quickCode
  useEffect(() => {
    storeDataGet("code", setGetCodeVerif);
  }, []);

  return getCodeVerif.isShowQuickCodeView ? (
    // view пароля быстрого доступа
    <Quick_code_ver3 />
  ) : getCodeVerif.readyGetCode ? (
    // страница получения пароля
    <Input_code_verification />
  ) : (
    // view авторизации
    <View style={styles.content}>
      <Text style={styles.title}>Авторизация</Text>
      <Auth_form_Universal
        includeForm={["Ваше Имя:", "Телефон: +7", "Email:", "Пароль:"]}
        btnText={"Создать аккаунт"}
        textUnderBtn={["Уже зарегистрировались?", "Войти"]}
      />
    </View>
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
