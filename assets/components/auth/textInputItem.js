import { StyleSheet, TextInput } from "react-native";
import { Color, Input_Text, Title } from "../../../components/tokens";

export default function TextInputItem({
  placeholder,
  inputMode,
  heightWindow,
  isFocus,
  onIsFocusHandler,
  onChangeHandler,
}) {
  const widthBorder = placeholder === isFocus ? 2 : 0;

  const probaHandle = (placeholder, target) => {
    // console.log(placeholder, target);
    onChangeHandler(placeholder, target);
  };
  return (
    <TextInput
      inputMode={inputMode}
      placeholder={placeholder}
      placeholderTextColor={"#A686A6"}
      style={{
        ...styles.form_inputText,
        height: heightWindow * 0.052,
        borderWidth: widthBorder,
      }}
      onFocus={() => onIsFocusHandler(placeholder)}
      // onChange={({ target }) => onChangeHandler(placeholder, target.value)}
      onChange={(e) => {
        // return console.log(e.nativeEvent.text);
        return probaHandle(placeholder, e.nativeEvent.text);
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
    borderColor: Color.dark_purple,
  },
});
