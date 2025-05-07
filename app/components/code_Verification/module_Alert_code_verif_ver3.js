import { Animated, StyleSheet, Text, Vibration, View } from "react-native";
import { widthWindow } from "../../../components/tokens";
import { useEffect, useState } from "react";

export default function Module_Alert_code_verif_ver3({
  isBlockAnimatedCodeHandler,
  randomCode,
}) {
  const [isShowCode, setIsShowCode] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsShowCode(true);
    }, 5000);
  }, []);
  const animatedTransform = new Animated.ValueXY({
    x: 0,
    y: -30,
  });

  const animatedOpacity = new Animated.Value(100);
  const opacityText = animatedOpacity.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  });

  const funcAnimated = (type, toValue, duration, useNativeDriver) => {
    return Animated.timing(type, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: useNativeDriver,
    }).start();
  };

  const layout = () => {
    funcAnimated(animatedTransform, { x: 0, y: 10 }, 200, true);
    funcAnimated(animatedOpacity, 0, 15000, true);
  };
  // Исчезновение анимации кода если код введен ыерно
  if (isBlockAnimatedCodeHandler === true) {
    return <></>;
  }
  // Отображение кода если код введен не верно
  if (isBlockAnimatedCodeHandler === "error") {
    return (
      <View
        style={{
          ...styles.content,
          transform: [{ translateX: 0 }, { translateY: 10 }],
        }}
      >
        <Text style={styles.contentText}>{randomCode}</Text>
      </View>
    );
  }
  if (!isShowCode) {
    return <></>;
  }
  // Анимация отображения кода
  Vibration.vibrate(100);
  return (
    <Animated.View
      style={{
        ...styles.content,
        transform: [
          { translateX: animatedTransform.x },
          { translateY: animatedTransform.y },
        ],
        opacity: opacityText,
      }}
      onLayout={layout}
    >
      <Text style={styles.contentText}>{randomCode}</Text>
    </Animated.View>
  );
}
const styles = StyleSheet.create({
  content: {
    position: "absolute",
    zIndex: 1,
    width: widthWindow * 0.7,
    justifyContent: "center",
    borderRadius: 10,
    height: 30,
    backgroundColor: "#4C0331",
    textAlign: "center",
  },
  contentText: {
    zIndex: 2,
    textAlign: "center",
    fontWeight: "900",
    letterSpacing: 5,
    color: "green",
    color: "#ffffff",
  },
});
