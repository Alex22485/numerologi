import { Animated, Image, StyleSheet, View } from "react-native";
import { heightWindow } from "../../../components/tokens";

export default function Module_Image_Process_load({ startStopRotated }) {
  const animatedLoadView = new Animated.Value(0);
  const rotate = animatedLoadView.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "-360deg"],
  });

  Animated.loop(
    Animated.sequence([
      Animated.timing(animatedLoadView, {
        toValue: 100,
        duration: 4000,
        // delay: 100, задержка можно поставить
        useNativeDriver: true,
      }),
      Animated.timing(animatedLoadView, {
        toValue: 0,
        duration: 4000,
        // delay: 100, задержка можно поставить
        useNativeDriver: true,
      }),
    ]),
    {
      //   iterations: 5, // можно количество циклов сделать
    }
  ).start();

  return (
    <Animated.View
      style={{ ...styles.imgLoding, transform: [{ rotate: rotate }] }}
    >
      <Image
        source={require("../../../assets/proccese_loading_Img/loader_15_opacity.png")}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  imgLoding: {
    marginTop: heightWindow * 0.076,
  },
});
