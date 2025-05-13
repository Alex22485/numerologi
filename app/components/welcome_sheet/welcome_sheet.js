import { Image, StyleSheet, Text, View } from "react-native";
import {
  BgColor,
  Color,
  heightWindow,
  widthWindow,
} from "../../../components/tokens";

export default function Welcome_sheet({ name }) {
  return (
    <View style={styles.content}>
      <Text style={styles.content_txt_1}>Добрый вечер</Text>
      <Text style={styles.content_txt_2}>{name} !</Text>
      <Image
        style={styles.img}
        source={require("../../../assets/welcom_IMG_2.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BgColor.bg_dark_pink,
    alignItems: "center",
  },
  content_txt_1: {
    marginTop: heightWindow * 0.2103,
    color: Color.white,
    fontSize: 40,
    fontWeight: "600",
  },
  content_txt_2: {
    marginTop: heightWindow * 0.0311,
    backgroundColor: BgColor.bg_dark_pink,
    color: Color.white,
    fontSize: 40,
    fontWeight: "600",
  },
  img: {
    marginTop: heightWindow * 0.09763,
    height: heightWindow * 0.13875536,
    width: widthWindow * 0.27906976,
  },
});
