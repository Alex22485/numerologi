import { StyleSheet, Text, View } from "react-native";
import { BgColor, Text_App, Title } from "../../components/tokens";
import { Link } from "expo-router";

export default function input_code_verification() {
  return (
    <View style={styles.content}>
      <Text style={styles.title}>Верификация</Text>
      <Link href={"/auth/auth"}>
        <View>
          <Text>Назад</Text>
        </View>
      </Link>
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
