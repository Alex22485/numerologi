import { StyleSheet, View } from "react-native";
import { BgColor } from "../../../components/tokens";
import { useState } from "react";
import Main from "./main";
import Module_Alert_code_verif_ver3 from "./module_Alert_code_verif_ver3";
import randomNumber from "./randomNumber";

const randomCode = randomNumber(10000, 100000);
console.log("randomCode: ", randomCode);

export default function Input_code_verification({ inputDataAuth }) {
  // const [isBlockAnimatedCode, setIsBlockAnimatedCode] = useState(false);
  const [multiState, setMultiState] = useState({
    isBlockAnimatedCode: false,
    codeSuccess: "empty",
  });

  // Цвет фона серый/белый
  const backgroundColor =
    multiState.codeSuccess === "empty" ? BgColor.bg_white : BgColor.bg_gray;

  // Код авторизации
  const onCodeAuth = (code) => {
    if (+code.code === randomCode) {
      setMultiState({ codeSuccess: "Yes", isBlockAnimatedCode: true });
    }
    // setMultiState((prev)=>{return({...prev, isBlockAnimatedCode:true})});
  };

  return (
    <View style={{ ...styles.content, backgroundColor: backgroundColor }}>
      <Module_Alert_code_verif_ver3
        isBlockAnimatedCodeHandler={multiState.isBlockAnimatedCode}
        randomCode={randomCode}
      />
      <Main
        inputDataAuth={inputDataAuth}
        onCodeAuth={onCodeAuth}
        codeSuccessHandler={multiState.codeSuccess}
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
