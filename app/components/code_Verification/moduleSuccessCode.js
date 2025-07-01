import { Animated, Image, StyleSheet, Text } from "react-native";
import {
  BgColor,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";
import storeDataObjWrite from "../quick_code/storeDataObjWrite";
import storeDataClearAll from "../quick_code/storeDataClearAll";
import { getCodeVerification } from "../../../entities/differentsVal/initialSettings";
import { useAtom } from "jotai";

export default function ModuleSuccessCode({ codeSuccessHandler }) {
  const [getCodeVerif, setGetCodeVerif] = useAtom(getCodeVerification);
  const animatedSuccessCodeVerif = new Animated.ValueXY({
    x: 0,
    y: heightWindow,
  });

  const layout = () => {
    Animated.timing(animatedSuccessCodeVerif, {
      toValue: { x: 0, y: heightWindow * 0.5193 },
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  if (codeSuccessHandler !== "Yes") {
    return <></>;
  }

  // Переход на страницу выбора быстрого пароля
  if (codeSuccessHandler === "Yes") {
    setTimeout(() => {
      // ! Временная очистка
      storeDataClearAll();
      //!!!  запись в "БД" (пока что в loc storage) после успешного ввода пароля быстрого доступа
      storeDataObjWrite(getCodeVerif.inputAuthData);

      setGetCodeVerif((pr) => {
        return { ...pr, isShowQuickCodeView: true };
      });
    }, 3000);
  }

  // Анимация "Регистрация успешна"
  return (
    <Animated.View
      style={{
        ...styles.content,
        transform: [
          { translateX: animatedSuccessCodeVerif.x },
          { translateY: animatedSuccessCodeVerif.y },
        ],
      }}
      onLayout={layout}
    >
      <Image
        style={styles.image}
        source={require("../../../assets/verification_layout/successVerif.png")}
      />
      <Text style={styles.text}>Регистрация успешна</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  content: {
    position: "absolute",
    backgroundColor: BgColor.bg_white,
    alignItems: "center",
    width: widthWindow,
    height: heightWindow * 0.5193,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
  },
  image: {
    width: widthWindow * 0.265,
    height: heightWindow * 0.1287,
    marginTop: heightWindow * 0.0601,
  },
  text: {
    marginTop: heightWindow * 0.05579,
    fontSize: Text_App.fs_17,
  },
});
