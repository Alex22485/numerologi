import { Image, StyleSheet, View, Text, TextInput } from "react-native";
import {
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";

export default function Module_inputCode({ inputDataAuth }) {
  const codeVerification = [
    { index: 1, digit: "" },
    { index: 2, digit: "" },
    { index: 3, digit: "" },
    { index: 4, digit: "" },
    { index: 5, digit: "" },
  ];
  return (
    <View style={styles.content}>
      <Image
        style={{ width: widthWindow * 0.265, height: heightWindow * 0.1287 }}
        source={require("../../../assets/verification_layout/lock.png")}
      />
      <View style={styles.textView}>
        <Text style={styles.textView_h2}>Код верификации</Text>
        <Text style={styles.textView_h3}>Мы отправили письмо на</Text>
        <Text style={styles.textView_h3}>{inputDataAuth["Email:"]}</Text>
      </View>
      <View style={styles.inputCodeContent}>
        {codeVerification.map((item) => {
          return (
            <TextInput
              key={item.index}
              inputMode={"tel"}
              maxLength={1}
              style={styles.textInput}
            ></TextInput>
          );
        })}
      </View>
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
  inputCodeContent: {
    width: widthWindow * 0.86,
    height: heightWindow * 0.065,
    flexDirection: "row",
    justifyContent: "space-between",
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
