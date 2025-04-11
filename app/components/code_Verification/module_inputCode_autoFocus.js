import { useRef, useState } from "react";
import { StyleSheet, View, TextInput, Keyboard } from "react-native";
import {
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";

export default function Module_inputCode_autoFocus({ codeVerifUserInput }) {
  //   const [inputCode, setInputCode] = useState("");

  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  const codeVerification = [
    { index: 1, digit: "", ref: firstRef, nextRef: secondRef },
    { index: 2, digit: "", ref: secondRef, nextRef: thirdRef },
    { index: 3, digit: "", ref: thirdRef, nextRef: fourthRef },
    { index: 4, digit: "", ref: fourthRef, nextRef: fifthRef },
    { index: 5, digit: "", ref: fifthRef, nextRef: fifthRef },
  ];
  return (
    <View style={styles.inputCodeContent}>
      {codeVerification.map((item) => {
        return (
          <TextInput
            key={item.index}
            ref={item.ref}
            autoFocus={item.index === 1 ? true : false}
            // showSoftInputOnFocus={true}
            inputMode={"tel"}
            maxLength={1}
            style={styles.textInput}
            onChangeText={(i) => {
              if (!i) return; // н понятно зачем это написал
              if (item.index === 5) {
                Keyboard.dismiss();
                codeVerifUserInput(i, item.index);
                return;
              }
              codeVerifUserInput(i, item.index);
              item.nextRef.current.focus();
            }}
          ></TextInput>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
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
