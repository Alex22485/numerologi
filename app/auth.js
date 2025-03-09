import { View, Text, StyleSheet, TextInput, Dimensions } from "react-native";
import {
  BgColor,
  BtnDisable,
  Title,
  Btn,
  Btn_ForgotUser_text,
  BtnEnable,
  Btn_ForgotUser,
  Text_App,
} from "../components/tokens";
import Auth_form from "../assets/components/auth/auth_form";

const heightWindow = Dimensions.get("window").height;
const widthWindow = Dimensions.get("window").width;

export default function Auth() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Авторизация</Text>
      <Auth_form />
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
    marginTop: 39,
    textAlign: "center",
    fontSize: Text_App.fs_34,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    color: Title.color_white,
  },
});
