import { Animated } from "react-native";

export default function Module_Image_Process_load_Animaing(animatedLoadView) {
  return Animated.loop(
    Animated.sequence([
      Animated.timing(animatedLoadView, {
        toValue: 100,
        duration: 4000,
        useNativeDriver: true,
      }),
      Animated.timing(animatedLoadView, {
        toValue: 0,
        duration: 4000,
        useNativeDriver: true,
      }),
    ]),
    {}
  ).start();
}
