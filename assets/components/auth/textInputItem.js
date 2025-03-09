import { StyleSheet, TextInput } from "react-native";
import { Color, Input_Text, Title } from "../../../components/tokens";

export default function TextInputItem({
  placeholder,
  heightWindow,
  isFocus,
  OnIsFocusHandler,
}) {
  const widthBorder = placeholder === isFocus ? 2 : 0;

  return (
    <TextInput
      placeholder={placeholder}
      placeholderTextColor={"#A686A6"}
      style={{
        ...styles.form_inputText,
        height: heightWindow * 0.052,
        borderWidth: widthBorder,
      }}
      onFocus={() => OnIsFocusHandler(placeholder)}
      onBlur={() => console.log("onBlur")}
    />
  );
}
const styles = StyleSheet.create({
  form_inputText: {
    backgroundColor: Title.color_white,
    borderRadius: 4,
    paddingLeft: Input_Text.margin_left_22,
    color: Color.dark_purple,
    borderColor: Color.dark_purple,
  },
});
