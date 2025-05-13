import { Image, StyleSheet, View, Text } from "react-native";
import {
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";
import Module_inputCode_autoFocus from "./module_inputCode_autoFocus";

export default function Module_inputCode({
  inputDataAuth,
  OnCodeVerifUserInput,
  codeSuccessHandler,
  OnCodeSuccessHandler,
  codeHandler,
}) {
  // console.log("inputDataAuth", inputDataAuth);
  return (
    <View style={styles.content}>
      <Image
        style={{ width: widthWindow * 0.265, height: heightWindow * 0.1287 }}
        source={require("../../../assets/verification_layout/lock.png")}
      />
      <View style={styles.textView}>
        <Text style={styles.textView_h2}>Код авторизации</Text>
        <Text style={styles.textView_h3}>
          Мы отправили push уведомление на:
        </Text>
        <Text style={styles.textView_h3}>{inputDataAuth["Телефон: +7"]}</Text>
      </View>
      <Module_inputCode_autoFocus
        codeHandler={codeHandler}
        codeSuccessHandler={codeSuccessHandler}
        OnCodeSuccessHandler={OnCodeSuccessHandler}
        codeVerifUserInput={(code, index) => {
          OnCodeVerifUserInput(code, index);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: heightWindow * 0.042,
    width: widthWindow * 0.86,
    height: heightWindow * 0.43,
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
  },
  textView: {
    alignItems: "center",
  },
  textView_h2: {
    fontSize: Text_App.fs_17,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    color: Color.dark_purple,
    marginBottom: heightWindow * 0.013,
  },
  textView_h3: {
    fontSize: Text_App.fs_15,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    color: Color.dark_purple,
  },

  textInput: {
    width: widthWindow * 0.156,
    textAlign: "center",
    verticalAlign: "middle",
    backgroundColor: "#FCDDFC",
    borderRadius: 10,
    fontSize: Text_App.fs_20,
  },
});
