import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  Animated,
} from "react-native";
import {
  Btn,
  Btn_AlreadyAuth_text,
  BtnDisable,
  BtnEnable,
  Text_App,
} from "../../components/tokens";
import styleBtn from "./styleBtn";
import { Link } from "expo-router";

export default function Auth_Btn({
  heightWindow,
  onPressHandler,
  OnValueForm,
}) {
  const animatedValue = new Animated.Value(100);
  const color = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: [BtnEnable.bgColor, Btn_AlreadyAuth_text.text_Color],
  });

  const OnBtnPressIn = () => {
    Animated.timing(animatedValue, {
      toValue: 0,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const OnBtnPressOut = () => {
    Animated.timing(animatedValue, {
      toValue: 100,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.Btn}>
      <TouchableOpacity
        disabled={styleBtn(OnValueForm)[0] ? false : true}
        onPressIn={OnBtnPressIn}
        onPressOut={OnBtnPressOut}
        onPress={() => {
          onPressHandler();
        }}
      >
        <Animated.View
          style={{
            ...styles.Btn_CreateUser,
            height: heightWindow * 0.052,
            opacity: styleBtn(OnValueForm)[1],
          }}
        >
          <Text
            style={{
              ...styles.Btn_CreateUser_text,
              color: styleBtn(OnValueForm)[2],
            }}
          >
            Создать аккаунт
          </Text>
        </Animated.View>
      </TouchableOpacity>

      <View style={styles.conteiner_AlreadyAuth}>
        <Text style={styles.conteiner_AlreadyAuth_text}>
          Уже зарегистрированы?{"   "}
        </Text>

        <TouchableOpacity
          onPressIn={OnBtnPressIn}
          onPressOut={OnBtnPressOut}
          onPress={() => console.log("Proba")}
        >
          {/* <Link href={"/code_verification/input_code_verification"}> */}
          <Animated.View>
            <Text
              style={{
                ...styles.conteiner_AlreadyAuth_btn,
                backgroundColor: color,
              }}
            >
              Войти
            </Text>
          </Animated.View>
          {/* </Link> */}
        </TouchableOpacity>

        {/* <Link href={"/code_verification/input_code_verification"}>
          <Pressable onPress={() => console.log("Proba")}>
            <Text style={styles.conteiner_AlreadyAuth_btn}>Войти</Text>
          </Pressable>
        </Link> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Btn: {},
  Btn_CreateUser: {
    backgroundColor: BtnDisable.bgColor,
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
    marginTop: 8,
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
    // color: BtnEnable.bgColor,
  },
});
