import { StyleSheet, TextInput } from "react-native";
import { Color, Input_Text, Title } from "../../../components/tokens";
import { useState } from "react";

export default function TextInputItem({
  valueForm,
  placeholder,
  heightWindow,
  onChangeHandler,
  inputMode,
}) {
  const [border, setBorder] = useState({
    color: Color.dark_purple,
    width: 0,
  });
  // выделение активной рамки у TextInput
  console.log("border: ", border);

  const onBlurHandler = () => {
    if (valueForm[placeholder].length === 0) {
      setBorder({ color: Color.red, width: 2 });
    }
    if (valueForm[placeholder].length !== 0) {
      setBorder({ color: Color.dark_purple, width: 0 });
    }
  };
  const onFocusHandler = () => {
    setBorder({ color: Color.dark_purple, width: 2 });
  };

  return (
    <TextInput
      cursorColor={Color.dark_purple}
      inputMode={inputMode}
      placeholder={placeholder}
      placeholderTextColor={"#A686A6"}
      style={{
        ...styles.form_inputText,
        height: heightWindow * 0.052,
        borderWidth: border.width,
        borderColor: border.color,
      }}
      // для выделения рамки активного TextInput
      onFocus={() => onFocusHandler()}
      // для выделения рамки пустого TextInput
      onBlur={() => onBlurHandler()}
      // для сбора информации из TextInput в один объект
      onChange={(e) => {
        return onChangeHandler(placeholder, e.nativeEvent.text);
      }}
    />
  );
}
const styles = StyleSheet.create({
  form_inputText: {
    backgroundColor: Title.color_white,
    borderRadius: 4,
    paddingLeft: Input_Text.margin_left_22,
    color: Color.dark_purple,
  },
});
