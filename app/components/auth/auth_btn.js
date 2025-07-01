import {
  StyleSheet,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
  Text,
} from "react-native";
import {
  Btn,
  BtnDisable,
  BtnEnable,
  heightWindow,
  Text_App,
} from "../../../components/tokens";
import styleBtn from "./styleBtn";
import { useRouter } from "expo-router";
import animatedBtnFunc from "../../../components/animatedBtn";

export default function Auth_Btn({
  btnText,
  textUnderBtn,
  onPressHandler,
  OnValueForm,
}) {
  const router = useRouter();

  const animatedBtn = new Animated.Value(100);
  const color = animatedBtn.interpolate({
    inputRange: [0, 100],
    outputRange: [Btn.btnHover, BtnEnable.bgColor],
  });
  return (
    <View style={styles.Btn}>
      <Pressable
        onPressIn={() => {
          animatedBtnFunc(animatedBtn, 0, 50);
        }}
        onPressOut={() => {
          animatedBtnFunc(animatedBtn, 50, 0);
        }}
        disabled={styleBtn(OnValueForm)[0] ? false : true}
        onPress={() => {
          onPressHandler(btnText);
        }}
      >
        <Animated.View
          style={{
            ...styles.Btn_CreateUser,
            backgroundColor: color,
          }}
        >
          <Text
            style={{
              ...styles.Btn_CreateUser_text,
              color: styleBtn(OnValueForm)[2],
            }}
          >
            {btnText}
          </Text>
        </Animated.View>
      </Pressable>
      <View style={styles.conteiner_AlreadyAuth}>
        <Text style={styles.conteiner_AlreadyAuth_text}>
          {textUnderBtn[0]}
          {"   "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            router.navigate("/components/signInView/signInView");
          }}
          onPressIn={() => {}}
          onPressOut={() => {}}
        >
          <Text style={styles.conteiner_AlreadyAuth_btn}>
            {textUnderBtn[1]}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Btn: {},
  Btn_CreateUser: {
    height: heightWindow * 0.052,
    borderRadius: Btn.br,
    justifyContent: "center",
  },
  Btn_CreateUser_text: {
    fontSize: Text_App.fs_19,
    fontFamily: Text_App.ff,
    fontWeight: Text_App.fw_Semibold,
    letterSpacing: Text_App.ls_minus_41,
    textAlign: "center",
    color: BtnDisable.color_gray,
  },
  conteiner_AlreadyAuth: {
    marginTop: heightWindow * 0.0086,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  conteiner_AlreadyAuth_text: {
    fontSize: Text_App.fs_13,
    fontWeight: Text_App.fw_bold,
  },

  conteiner_AlreadyAuth_btn: {
    fontSize: Text_App.fs_13,
    fontWeight: Text_App.fw_bold,
    color: BtnEnable.bgColor,
  },
});
