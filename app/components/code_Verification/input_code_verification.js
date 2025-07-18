import { StyleSheet, View } from "react-native";
import { BgColor } from "../../../components/tokens";
import { useState } from "react";
import Main from "./main";
import Module_Alert_code_verif_ver3 from "./module_Alert_code_verif_ver3";
import randomNumber from "./randomNumber";

const randomCode = randomNumber(10000, 100000);

export default function Input_code_verification() {
  const [multiState, setMultiState] = useState({
    isBlockAnimatedCode: false,
    codeSuccess: "empty",
  });

  // Цвет фона серый/белый
  const backgroundColor =
    multiState.codeSuccess === "Yes" ? BgColor.bg_gray : BgColor.bg_white;

  // Код авторизации сравнение с введенным
  const onCodeAuth = (code) => {
    if (+code.code === randomCode) {

      // переход на стр быстрого кода через Main-moduleSuccessCode
      setMultiState({ codeSuccess: "Yes", isBlockAnimatedCode: true });
    } else {
      setMultiState({ codeSuccess: "No", isBlockAnimatedCode: "error" });
    }
  };

  // отключение вибрации не правильно введенного кода авторизации
  const OnCodeSuccessHandler = (resetVibration) => {
    setMultiState((pr) => {
      return { ...pr, codeSuccess: resetVibration };
    });
  };

  return (
    <View style={{ ...styles.content, backgroundColor: backgroundColor }}>
      <Module_Alert_code_verif_ver3
        isBlockAnimatedCodeHandler={multiState.isBlockAnimatedCode}
        randomCode={randomCode}
      />
      <Main
        onCodeAuth={onCodeAuth}
        codeSuccessHandler={multiState.codeSuccess}
        OnCodeSuccessHandler={OnCodeSuccessHandler}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
  },
});
