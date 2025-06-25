import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  Color,
  heightWindow,
  Input_Text,
  Title,
} from "../../../components/tokens";
import { useEffect, useState } from "react";
import colorBorder from "./colorBorder";

export default function TextInputItem({
  index,
  valueForm,
  placeholder,
  inputMode,
  txtErr = "",
  isError = "",
  onChangeHandler,
  onResetIsError,
}) {
  const [border, setBorder] = useState({
    isTextMistakes: isError,
    color: Color.dark_purple,
    width: 0,
  });

  const textError =
    txtErr === "notAuth" && index === 1
      ? "телефон не зарегистрирован"
      : txtErr === "errorPassword" && index === 1
      ? "не верный пароль"
      : txtErr.length > 0 && index === 0
      ? ""
      : "поле не должно быть пустым";

  const textErrorView = border.isTextMistakes && (
    <View style={{ height: heightWindow * 0.0343 }}>
      <Text style={{ ...styles.textMistakes }}>{textError}</Text>
    </View>
  );

  useEffect(() => {
    isError
      ? setBorder((pr) => {
          return { ...pr, isTextMistakes: true };
        })
      : "";
  }, [isError]);

  // Цвет рамки
  const colorBrd = (inOnFocus) => {
    colorBorder(valueForm, placeholder, setBorder, inOnFocus);
    isError ? onResetIsError() : "";
  };

  return (
    <View style={{ height: heightWindow * 0.0858 }}>
      <TextInput
        cursorColor={Color.dark_purple}
        inputMode={inputMode}
        placeholder={placeholder}
        placeholderTextColor={Color.placeholder}
        onFocus={() => colorBrd(true)}
        onBlur={() => colorBrd(false)}
        onChangeText={(e) => {
          return onChangeHandler(placeholder, e);
        }}
        style={{
          ...styles.form_inputText,
          borderWidth: border.width,
          borderColor: border.color,
        }}
        // !!!Загуглить отличие onChange от onChangeText
        // onChange={(e) => {
        //   console.log("e: ", e);
        //   return onChangeHandler(placeholder, e.nativeEvent.text);
        // }}
      />
      {textErrorView}
    </View>
  );
}
const styles = StyleSheet.create({
  form_inputText: {
    height: heightWindow * 0.052,
    fontSize: heightWindow * 0.018,
    backgroundColor: Title.color_white,
    borderRadius: 4,
    paddingLeft: Input_Text.margin_left_22,
    marginBottom: 0,
    color: Color.dark_purple,
  },
  textMistakes: {
    textAlign: "right",
    color: "#BC2C2A",
    fontSize: 13,
  },
});
