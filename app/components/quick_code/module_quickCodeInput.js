import { useRef } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import {
  BgColor,
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";

export default function Module_quickCodeInput({ bgColor }) {
  console.log("bgColor: ", bgColor);
  // Фокус на другую цифру следующую или предыдущуюы
  const firstRef = useRef();
  const secondRef = useRef();
  const thirdRef = useRef();
  const fourthRef = useRef();

  const codeVerification = [
    {
      index: 1,
      digit: "",
      ref: firstRef,
      nextRef: secondRef,
      prevRef: firstRef,
    },
    {
      index: 2,
      digit: "",
      ref: secondRef,
      nextRef: thirdRef,
      prevRef: firstRef,
    },
    {
      index: 3,
      digit: "",
      ref: thirdRef,
      nextRef: fourthRef,
      prevRef: secondRef,
    },
    {
      index: 4,
      digit: "",
      ref: fourthRef,
      nextRef: fourthRef,
      prevRef: thirdRef,
    },
  ];

  return (
    <View style={styles.quickInputCode}>
      {codeVerification.map((item) => {
        return (
          <View
            key={item.index}
            // ref={item.ref}
            style={{
              ...styles.textInput,
              backgroundColor: bgColor[item.index - 1],
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
