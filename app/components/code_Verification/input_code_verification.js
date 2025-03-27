import { StyleSheet, Text, View } from "react-native";
import { BgColor, Text_App, Title } from "../../../components/tokens";

export default function Input_code_verification() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Верификация</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BgColor.bg_white,
    alignItems: "center",
  },
  title: {
    // marginTop: heightWindow * 0.0418,
    textAlign: "center",
    fontSize: Text_App.fs_34,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    color: Title.color_burgandy,
  },
});
