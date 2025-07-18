import { StyleSheet, Text, View } from "react-native";
import {
  BgColor,
  heightWindow,
  Text_App,
  Title,
} from "../../../components/tokens";
import Auth_form_Universal from "../../Auth_form_Universal";
import { useState } from "react";
import Quick_code_ver3 from "../quick_code/quick_code_ver3";

export default function SignInView() {
  const [isPSWDSuccsses, setIsPSWDSuccsses] = useState({
    ref: false,
    userInfo: "",
  });

  const onPasswordSuccssess = (value) => {
    setIsPSWDSuccsses({ ref: true, userInfo: value });
  };

  return isPSWDSuccsses.ref ? (
    // !Введенный пароль совпадает БД
    <Quick_code_ver3 />
  ) : (
    <View style={styles.contentView}>
      <Text style={styles.title}>Вход</Text>
      <Auth_form_Universal
        includeForm={["Телефон: +7", "Пароль:"]}
        btnText={"Войти"}
        textUnderBtn={["", "Забыли пароль?"]}
        onGoToWelcomSheet={onPasswordSuccssess}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
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
