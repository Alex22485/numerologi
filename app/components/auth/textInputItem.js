import { StyleSheet, Text, TextInput, View } from "react-native";
import {
  Color,
  heightWindow,
  Input_Text,
  Title,
} from "../../../components/tokens";
import { useState } from "react";
import colorBorder from "./colorBorder";

export default function TextInputItem({
  valueForm,
  placeholder,
  onChangeHandler,
  inputMode,
}) {
  const [border, setBorder] = useState({
    isTextMistakes: false,
    color: Color.dark_purple,
    width: 0,
  });
  // Темная рамка у активного TextInput
  const onFocusHandler = () => {
    colorBorder(valueForm, placeholder, setBorder, true);
  };
  // Красная рамка у пустого TextInput
  const onBlurHandler = () => {
    colorBorder(valueForm, placeholder, setBorder);
  };

  return (
    <View style={{ height: heightWindow * 0.0858 }}>
      <TextInput
        cursorColor={Color.dark_purple}
        inputMode={inputMode}
        placeholder={placeholder}
        placeholderTextColor={"#A686A6"}
        style={{
          ...styles.form_inputText,
          borderWidth: border.width,
          borderColor: border.color,
        }}
        onFocus={() => onFocusHandler()}
        onBlur={() => onBlurHandler()}
        // для сбора информации из TextInput в один объект
        onChangeText={(e) => {
          console.log("e: ", e);
          return onChangeHandler(placeholder, e);
        }}
        // !!!Загуглить отличие onChange от onChangeText
        // onChange={(e) => {
        //   console.log("e: ", e);
        //   // console.log("t: ", e.nativeEvent.text);
        //   return onChangeHandler(placeholder, e.nativeEvent.text);
        // }}
      />
      {border.isTextMistakes && (
        <View style={{ height: heightWindow * 0.0343 }}>
          <Text style={{ ...styles.textMistakes }}>
            поле не должно быть пустым
          </Text>
        </View>
      )}
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
