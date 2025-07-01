import { Animated } from "react-native";

export default function animatedBtnFunc(animatedBtn, toValue, duration) {
  Animated.timing(animatedBtn, {
    toValue: toValue,
    duration: duration,
    useNativeDriver: true,
  }).start();
}
