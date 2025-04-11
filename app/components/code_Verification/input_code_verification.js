import { StyleSheet, View } from "react-native";
import { BgColor } from "../../../components/tokens";
import Module_inputCode from "./module_inputCode";
import Module_repeat_sending_code from "./module_repeat_sending_code";
import Module_btnTitle from "./module_btnTitle";
import Module_Image_Process_load from "./module_Image_Process_load";
import { useEffect, useState } from "react";

export default function Input_code_verification({ inputDataAuth }) {
  const [code, setIscode] = useState({ isShowLoad: false, closeLoad: false });
  console.log("code: ", code);

  const coderef = (inputCode, index) => {
    console.log("index: ", index);
    console.log("inputCode: ", inputCode);
    setIscode((pr) => {
      return { ...pr, [index]: inputCode };
    });
  };
  useEffect(() => {
    // Скрыть imageLoading
    if (code.isShowLoad) {
      const checkCode = setTimeout(() => {
        setIscode((pr) => {
          return { ...pr, isShowLoad: false, closeLoad: true };
        });
      }, 4000);

      return () => {
        clearTimeout(checkCode);
      };
    }
    // показать imageLoading
    if (code[5] && !code.closeLoad) {
      setIscode((pr) => {
        return { ...pr, isShowLoad: true };
      });
    }
  }, [code]);

  return (
    <View style={styles.content}>
      <Module_btnTitle />
      <Module_inputCode
        inputDataAuth={inputDataAuth}
        OnCodeVerifUserInput={coderef}
      />
      <Module_repeat_sending_code />
      {code.isShowLoad && <Module_Image_Process_load />}
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: BgColor.bg_white,
  },
});
