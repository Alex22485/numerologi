import { StyleSheet, View } from "react-native";
import { BgColor } from "../../../components/tokens";
import { useState } from "react";
import Main from "./main";
import Module_Alert_code_verif_ver3 from "./module_Alert_code_verif_ver3";
import randomNumber from "./randomNumber";

const randomCode = randomNumber(10000, 100000);

export default function Input_code_verification({}) {
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
      //! Запись данных о пользователе при успешной авторизации в localStorage( в  будующем на сервер). Сделать в виде объекта. Подумать может перенести эту запись после ввода кода быстрого доступа
      // storeDataObjWrite(inputDataAuth, setMultiState, {
      //   codeSuccess: "Yes",
      //   isBlockAnimatedCode: true,
      // });

      setMultiState({ codeSuccess: "Yes", isBlockAnimatedCode: true });
    } else {
      setMultiState({ codeSuccess: "No", isBlockAnimatedCode: "error" });
    }
  };

  // отлюкчение вибрации не правильно введенного кода авторизации
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
