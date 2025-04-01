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

export default function Auth_Btn({ onPressHandler, OnValueForm }) {
  const animatedBtn = new Animated.Value(100);
  const color = animatedBtn.interpolate({
    inputRange: [0, 100],
    outputRange: [Btn.btnHover, BtnEnable.bgColor],
  });
  const onPressBtnIn = () => {
    Animated.timing(animatedBtn, {
      toValue: 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };
  const onPressBtnOut = () => {
    Animated.timing(animatedBtn, {
      toValue: 100,
      duration: 50,
      useNativeDriver: true,
    }).start();
  };
  return (
    <View style={styles.Btn}>
      <Pressable
        onPressIn={onPressBtnIn}
        onPressOut={onPressBtnOut}
        disabled={styleBtn(OnValueForm)[0] ? false : true}
        onPress={() => {
          onPressHandler();
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
            Создать аккаунт
          </Text>
        </Animated.View>
      </Pressable>
      <View style={styles.conteiner_AlreadyAuth}>
        <Text style={styles.conteiner_AlreadyAuth_text}>
          Уже зарегистрированы?{"   "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            console.log("press");
          }}
          onPressIn={() => {
            console.log("In");
          }}
          onPressOut={() => {
            console.log("out");
          }}
        >
          <Text style={styles.conteiner_AlreadyAuth_btn}>Войти</Text>
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
