import { Animated, StyleSheet, Text, View } from "react-native";
import { BgColor, widthWindow } from "../../../components/tokens";
import Module_inputCode from "./module_inputCode";
import Module_repeat_sending_code from "./module_repeat_sending_code";
import Module_btnTitle from "./module_btnTitle";
import Module_Image_Process_load from "./module_Image_Process_load";
import { useEffect, useState } from "react";

const VERIFICATIONCODE = Math.floor(Math.random() * 100000);

export default function Input_code_verification({ inputDataAuth }) {
  console.log("VERIFICATIONCODE: ", VERIFICATIONCODE);
  const [code, setIscode] = useState({ isShowLoad: false, closeLoad: false });

  // Появление кода верификации
  const alertCodeVerification = new Animated.ValueXY({ x: 0, y: 0 });
  Animated.timing(alertCodeVerification, {
    toValue: { x: 0, y: 100 },
    duration: 2000,
    useNativeDriver: true,
  }).start();

  const coderef = (inputCode, index) => {
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
      <Animated.View
        style={{
          ...styles.alertShowCodeVerification,
          transform: [
            { translateX: alertCodeVerification.x },
            { translateY: alertCodeVerification.y },
          ],
        }}
      >
        <Text style={styles.textVerification}>{VERIFICATIONCODE}</Text>
      </Animated.View>

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
    // !!! ??  ставлю flex: 1 и всё смещается при появлении клавиатуры. Раньше не было так
    flex: 1,
    alignItems: "center",
    // backgroundColor: BgColor.bg_white,
    // marginTop: 0,
    // paddingTop: 0,
    backgroundColor: "pink",
    justifyContent: "center",
  },
  alertShowCodeVerification: {
    position: "absolute",
    width: widthWindow,
    height: 50,
    backgroundColor: "pink",
    textAlign: "center",
  },
  textVerification: {
    textAlign: "center",
  },
});
