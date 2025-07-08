import { Animated, Pressable, StyleSheet, Text } from "react-native";
import animatedBtnFunc from "./animatedBtn";
import {
  Btn,
  BtnDisable,
  BtnEnable,
  heightWindow,
  Text_App,
} from "../../components/tokens";
import styleBtn from "../../app/components/auth/styleBtn";

export default function BtnPart1({ valueForm, btnText, onPressHandler }) {
  //Анимация кнопки
  const animatedBtn = new Animated.Value(100);
  const color = animatedBtn.interpolate({
    inputRange: [0, 100],
    outputRange: [Btn.btnHover, BtnEnable.bgColor],
  });

  return (
    <Pressable
      onPressIn={() => {
        animatedBtnFunc(animatedBtn, 0, 50);
      }}
      onPressOut={() => {
        animatedBtnFunc(animatedBtn, 50, 0);
      }}
      disabled={styleBtn(valueForm)[0] ? false : true}
      onPress={() => {
        onPressHandler();
      }}
    >
      <Animated.View
        style={{
          ...styles.BtnPart1,
          backgroundColor: color,
        }}
      >
        <Text
          style={{
            ...styles.BtnPart1_text,
            color: styleBtn(valueForm)[2],
          }}
        >
          {btnText}
        </Text>
      </Animated.View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  BtnPart1: {
    height: heightWindow * 0.052,
    borderRadius: Btn.br,
    justifyContent: "center",
  },
  BtnPart1_text: {
    fontSize: Text_App.fs_19,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    letterSpacing: Text_App.ls_minus_41,
    textAlign: "center",
    color: BtnDisable.color_gray,
  },
});
