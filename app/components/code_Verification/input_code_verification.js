import { Image, StyleSheet, Text, View } from "react-native";
import {
  BgColor,
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";
import Modul_inputCode from "./module_inputCode";

export default function Input_code_verification({ inputDataAuth }) {
  return (
    <View style={styles.content}>
      <View style={styles.titleView}>
        <View style={styles.arrowView}>
          <Image
            style={styles.arrowView_arrow}
            source={require("../../../assets/verification_layout/arrow_left.png")}
          />
        </View>
        <Text style={styles.title}>Верификация</Text>
      </View>
      <Modul_inputCode inputDataAuth={inputDataAuth} />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: BgColor.bg_white,
  },
  arrowView: {},
  arrowView_arrow: {
    flex: 1,
    width: widthWindow * 0.068,
  },
  titleView: {
    marginLeft: widthWindow * 0.06,
    marginTop: heightWindow * 0.042,
    height: heightWindow * 0.0397,
    width: widthWindow * 0.69,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: widthWindow * 0.17,
    fontSize: Text_App.fs_17,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    color: Color.dark_purple,
  },
});
