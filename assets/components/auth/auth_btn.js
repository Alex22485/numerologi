import { StyleSheet, View, Text } from "react-native";
import {
  Btn,
  BtnDisable,
  BtnEnable,
  Text_App,
} from "../../../components/tokens";

export default function Auth_Btn({ heightWindow }) {
  return (
    <View style={styles.Btn}>
      <View style={{ ...styles.Btn_CreateUser, height: heightWindow * 0.052 }}>
        <Text style={styles.Btn_CreateUser_text}>Создать аккаунт</Text>
      </View>
      <View style={styles.Btn_ForgotUser}>
        <Text style={styles.Btn_ForgotUser_text}>Уже зарегистрированы? </Text>
        <View style={styles.Btn_ForgotUser_Btn}>
          <Text style={styles.Btn_ForgotUser_Btn_text}>Войти</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Btn: {},
  Btn_CreateUser: {
    backgroundColor: BtnDisable.bgColor,
    opacity: BtnDisable.bg_opacity,
    borderRadius: Btn.br,
    justifyContent: "center",
  },
  Btn_CreateUser_text: {
    fontSize: Text_App.fs_19,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    letterSpacing: Text_App.ls_minus_41,
    textAlign: "center",
    color: BtnDisable.color_gray,
  },
  Btn_ForgotUser: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  Btn_ForgotUser_text: {
    fontSize: Text_App.fs_13,
    fontWeight: Text_App.fw_bold,
  },
  Btn_ForgotUser_Btn: {},
  Btn_ForgotUser_Btn_text: {
    fontSize: Text_App.fs_13,
    fontWeight: Text_App.fw_bold,
    color: BtnEnable.bgColor,
  },
});
