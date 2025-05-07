import { useRef, useState } from "react";
import { StyleSheet, View, TextInput, Keyboard, Vibration } from "react-native";
import {
  BgColor,
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";

export default function Module_inputCode_autoFocus({
  codeHandler,
  codeSuccessHandler,
  OnCodeSuccessHandler,
  codeVerifUserInput,
}) {
  // Фокус на другую цифру следующую или предыдущуюы
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();
  const fifthRef = useRef();
  const codeVerification = [
    {
      index: 1,
      digit: "",
      ref: firstRef,
      nextRef: secondRef,
      prevRef: firstRef,
    },
    {
      index: 2,
      digit: "",
      ref: secondRef,
      nextRef: thirdRef,
      prevRef: firstRef,
    },
    {
      index: 3,
      digit: "",
      ref: thirdRef,
      nextRef: fourthRef,
      prevRef: secondRef,
    },
    {
      index: 4,
      digit: "",
      ref: fourthRef,
      nextRef: fifthRef,
      prevRef: thirdRef,
    },
    {
      index: 5,
      digit: "",
      ref: fifthRef,
      nextRef: fifthRef,
      prevRef: fourthRef,
    },
  ];

  if (codeSuccessHandler === "No") {
    Vibration.vibrate();
  }

  // Выбор цвета
  const backgroundColor =
    codeSuccessHandler === "No" ? BgColor.bg_error : BgColor.bg_pink;
  const color = codeSuccessHandler === "No" ? Color.white : Color.dark_purple;
  const opacity = codeSuccessHandler === "No" ? 0.5 : 1;

  return (
    <View style={styles.inputCodeContent}>
      {codeVerification.map((item) => {
        return (
          <TextInput
            // value={valueInput[item.index]}
            value={codeHandler[item.index]}
            key={item.index}
            ref={item.ref}
            autoFocus={item.index === 1 ? true : false}
            inputMode={"tel"}
            maxLength={1}
            style={{
              ...styles.textInput,
              backgroundColor: backgroundColor,
              color: color,
              opacity: opacity,
            }}
            onChangeText={(i) => {
              if (!i) return; // н понятно зачем это написал
              if (item.index === 5) {
                // Скрыть клавиатуру
                Keyboard.dismiss();
                codeVerifUserInput(i, item.index);
                // setValueInput((pr) => {
                //   return { ...pr, [item.index]: i };
                // });
                return;
              }
              if (codeSuccessHandler === "No") {
                OnCodeSuccessHandler("empty");
                codeVerifUserInput(i, item.index);
                item.nextRef.current.focus();
                return;
              }
              codeVerifUserInput(i, item.index);
              // смена фокуса на след цифре
              item.nextRef.current.focus();
            }}
            // Удаление цифр кода
            onKeyPress={(e) => {
              if (e.nativeEvent.key === "Backspace") {
                codeVerifUserInput("", item.index);
                // смена фокуса на предыдущую цифру
                // item.prevRef.current.focus();
              }
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
    borderRadius: 10,
    fontSize: Text_App.fs_20,
  },
});
