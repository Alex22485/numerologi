import { StyleSheet, Text, View } from "react-native";
import {
  BgColor,
  Color,
  heightWindow,
  Text_App,
} from "../../../components/tokens";
import Module_customKeyBoard from "./module_customKeyBoard";
import Module_quickCodeInput from "./module_quickCodeInput";
import { useEffect, useState } from "react";

export default function Quick_code({ textContent }) {
  const colorItem = [
    BgColor.bg_pink,
    BgColor.bg_pink,
    BgColor.bg_pink,
    BgColor.bg_pink,
    0,
    { code: "" },
    { repeatCode: false },
    { codeSecond: "" },
  ];

  const [bgColor, setBgColor] = useState(colorItem);
  const textTitle = bgColor[6].repeatCode ? "Повторите пароль" : textContent;

  useEffect(() => {
    if (bgColor[4] === 4) {
      // bgColor.concat().splice(0, 4, BgColor.bg_pink);
      const newArr = bgColor.map((item, index) => {
        return index === 4 ? 0 : index === 6 ? { repeatCode: true } : item;
      });
      setBgColor(newArr);
      return;
    }
  }, [bgColor]);

  const changeColorQuickCode = (code) => {
    if (bgColor[6].repeatCode && !bgColor[7].codeSecond) {
      console.log("rrr");
      const newAr2 = bgColor.map((item, index) => {
        return index === 6
          ? { repeatCode: false }
          : index === 7
          ? { codeSecond: code }
          : item;
      });
      newAr2.splice(
        0,
        4,
        BgColor.bg_dark_pink,
        BgColor.bg_pink,
        BgColor.bg_pink,
        BgColor.bg_pink
      );
      setBgColor(newAr2);
      return;
    }
    if (bgColor[7]) {
      const newArNew = bgColor.map((item, index) => {
        if (bgColor[7] === 4) {
          return item;
        }
        return index === bgColor[7]
          ? BgColor.bg_dark_pink
          : Number.isInteger(item)
          ? item + 1
          : index === 7
          ? { codeSecond: item.codeSecond + "" + code }
          : item;
      });
      setBgColor(newArNew);
    }
    const newAr = bgColor.map((item, index) => {
      if (bgColor[4] === 4) {
        return item;
      }
      return index === bgColor[4]
        ? BgColor.bg_dark_pink
        : Number.isInteger(item)
        ? item + 1
        : index === 5
        ? { code: item.code + "" + code }
        : item;
    });
    setBgColor(newAr);
  };
  return (
    <View style={styles.content}>
      <Text style={styles.content_text}>{textTitle}</Text>
      <Module_quickCodeInput bgColor={bgColor} />
      <Module_customKeyBoard onChangeColorQuickCode={changeColorQuickCode} />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: BgColor.bg_white,
    alignContent: "center",
  },
  content_text: {
    marginTop: heightWindow * 0.0966,
    fontSize: Text_App.fs_17,
    color: Color.dark_purple,
  },
});
