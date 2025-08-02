import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BtnEnable, heightWindow, Text_App } from "../../components/tokens";

export default function BnPart2({ textUnderBtn }) {
  const router = useRouter();
  return (
    <View style={styles.conteiner_AlreadyAuth}>
      <Text style={styles.conteiner_AlreadyAuth_text}>
        {textUnderBtn[0]}
        {"   "}
      </Text>
      <TouchableOpacity
        onPress={() => {
          if (textUnderBtn[1] === "Войти") {
            //! кнопка "назад" отправляет к начальной загрузке старницы
            // router.navigate("/components/signInView/signInView");
            //! кнопка "назад" сворачивает приложение
            router.replace("/components/signInView/signInView");
          } else {
            console.log("зыбыл пароль");
          }
        }}
        onPressIn={() => {}}
        onPressOut={() => {}}
      >
        <Text style={styles.conteiner_AlreadyAuth_btn}>{textUnderBtn[1]}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
