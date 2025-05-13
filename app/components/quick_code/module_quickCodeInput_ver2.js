import { StyleSheet, View } from "react-native";
import {
  BgColor,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";

export default function Module_quickCodeInput_ver2({ quickCode }) {
  // console.log("quickCode: ", quickCode);
  // console.log("quickCode.cointFirst: ", quickCode.cointFirst);
  const backGrColor = (index) => {
    if (quickCode.errorCode) {
      return BgColor.bg_error;
    }
    if (!Number.isInteger(quickCode.cointFirst)) {
      return BgColor.bg_pink;
    }
    if (quickCode.cointFirst >= index) {
      return BgColor.bg_dark_pink;
    }
    return BgColor.bg_pink;
  };

  const codeVerification = [
    { index: 0 },
    { index: 1 },
    { index: 2 },
    { index: 3 },
  ];

  return (
    <View style={styles.quickInputCode}>
      {codeVerification.map((item, index) => {
        return (
          <View
            key={item.index}
            style={{
              ...styles.textInput,
              backgroundColor: backGrColor(index),
            }}
          />
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  quickInputCode: {
    marginTop: heightWindow * 0.0966,
    width: widthWindow * 0.86,
    height: heightWindow * 0.065,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    width: widthWindow * 0.156,
    textAlign: "center",
    verticalAlign: "middle",
    borderRadius: 10,
    fontSize: Text_App.fs_20,
  },
});
