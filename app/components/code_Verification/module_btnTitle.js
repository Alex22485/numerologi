import { Image, StyleSheet, Text, View } from "react-native";
import {
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";

export default function Module_btnTitle() {
  return (
    <View style={styles.titleView}>
      <View style={styles.arrowView}>
        <Image
          style={styles.arrowView_arrow}
          source={require("../../../assets/verification_layout/arrow_left.png")}
        />
      </View>
      <Text style={styles.title}>Авторизация</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titleView: {
    // marginTop: heightWindow * 0.042,
    // marginTop: heightWindow * 0.0687,
    marginTop: heightWindow * 0.1202,
    height: heightWindow * 0.0397,
    width: widthWindow * 0.86,
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "pink",
  },
  arrowView_arrow: {
    flex: 1,
    width: widthWindow * 0.068,
  },
  title: {
    marginLeft: widthWindow * 0.17,
    fontSize: Text_App.fs_17,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    color: Color.dark_purple,
  },
});
