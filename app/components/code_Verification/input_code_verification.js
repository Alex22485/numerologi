import { Image, StyleSheet, Text, View } from "react-native";
import { BgColor, heightWindow, widthWindow } from "../../../components/tokens";
import Module_inputCode from "./module_inputCode";
import Module_repeat_sending_code from "./module_repeat_sending_code";
import Module_btnTitle from "./module_btnTitle";
import Module_Image_Process_load from "./module_Image_Process_load";

export default function Input_code_verification({ inputDataAuth }) {
  return (
    <View style={styles.content}>
      <Module_btnTitle />
      <Module_inputCode inputDataAuth={inputDataAuth} />
      <Module_repeat_sending_code />
      <Module_Image_Process_load />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: BgColor.bg_white,
  },
});
