import { StyleSheet, Text, View } from "react-native";
import {
  BgColor,
  heightWindow,
  Text_App,
  Title,
} from "../../../components/tokens";
import Auth_form_Universal from "../../Auth_form_Universal";
import { useState } from "react";
import Welcome_sheet from "../welcome_sheet/welcome_sheet";

export default function SignInView() {
  const [isPSWDSuccsses, setIsPSWDSuccsses] = useState({
    ref: false,
    userInfo: "",
  });

  const onPasswordSuccssess = (value) => {
    // console.log("Пароль_Успешен: данныеUser: ", value);
    setIsPSWDSuccsses({ ref: true, userInfo: value });
  };

  return isPSWDSuccsses.ref ? (
    // !Введенный пароль совпадает БД
    <Welcome_sheet name={isPSWDSuccsses.userInfo["Ваше Имя:"]} />
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

  // ! Рабочий код до 03.06.25
  // return compairPassword.code === "succssess" ? (
  //   // !Введенный пароль совпадает БД
  //   <Welcome_sheet name={compairPassword["Ваше Имя:"]} />
  // ) : compairPassword.code === "error" ? (
  //   // ! Пароль не совпадает с БД
  //   <View>
  //     <Text>Ошибка</Text>
  //   </View>
  // ) : compairPassword.code === "notAuth" ? (
  //   // 1Не верный номер телефона
  //   <View>
  //     <Text>телефон не зарегистрирован</Text>
  //   </View>
  // ) : (
  //   <View style={styles.contentView}>
  //     <Text style={styles.title}>Вход</Text>
  //     <Auth_form_Universal
  //       includeForm={["Телефон: +7", "Пароль:"]}
  //       onPressAuth={onPressHandler}
  //       btnText={"Войти"}
  //       textUnderBtn={["", "Забыли пароль?"]}
  //     />
  //   </View>
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
