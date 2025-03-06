import { StyleSheet, Text, View } from "react-native";

export default function BtnAuth() {
  return (
    <View style={styles.conteiner_click_Auth}>
      <View style={styles.conteiner_BtnAuth}>
        <Text style={styles.conteiner_BtnAuth_Text}>Создать аккаунт</Text>
      </View>
      <View style={styles.conteiner_BtnAuth_forgot}>
        <Text style={styles.conteiner_BtnAuth_forgot_text}>
          Уже зарегистрировались?
        </Text>
        <Text style={styles.conteiner_BtnAuth_forgot_Btn}>Войти</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner_click_Auth: {
    width: "85%",
    alignSelf: "center",
    marginTop: 49,
    // backgroundColor: "white",
  },
  conteiner_BtnAuth: {
    backgroundColor: "#CBB171",
    borderRadius: 10,
  },
  conteiner_BtnAuth_Text: {
    height: 48,
    alignSelf: "center",
    verticalAlign: "middle",
    color: "white",
    fontSize: 19,
    // lineHeight: 22,
    // fontWeight: "semibold",
    // fontFamily: "Roboto",
  },
  conteiner_BtnAuth_forgot: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  conteiner_BtnAuth_forgot_text: {
    textAlign: "right",
    fontSize: 13,
    letterSpacing: 0.24,
    color: "#361F36",
  },
  conteiner_BtnAuth_forgot_Btn: {
    color: "#856D31",
    fontSize: 13,
    letterSpacing: 0.24,
    fontWeight: "semibold",
  },
});
