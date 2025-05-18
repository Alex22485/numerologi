import { StyleSheet, View } from "react-native";
import {
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";
import backGrColor from "./backGrColorViewQuickCodeInput";

export default function Module_quickCodeInput_ver2({ quickCode }) {
  const codeVerification = [
    { index: 1 },
    { index: 2 },
    { index: 3 },
    { index: 4 },
  ];

  return (
    <View style={styles.quickInputCode}>
      {codeVerification.map((item) => {
        return (
          <View
            key={item.index}
            style={{
              ...styles.textInput,
              backgroundColor: backGrColor(quickCode, item.index),
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
