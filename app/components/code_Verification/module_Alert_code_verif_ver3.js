// import { transform } from "@babel/core";
// import { useEffect, useState } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { widthWindow } from "../../../components/tokens";
import { useEffect, useState } from "react";

export default function Module_Alert_code_verif_ver3({ startAnimatedCode }) {
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

  funcAnimated(animatedTransform, { x: 0, y: 10 }, 200, true);
  funcAnimated(animatedOpacity, 0, 15000, true);

  const layout = () => {
    funcAnimated(animatedTransform, { x: 0, y: 10 }, 200, true);
    funcAnimated(animatedOpacity, 0, 15000, true);
  };

  if (!isShowCode) {
    return <></>;
  }

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
      <Text style={styles.contentText}> 5 4 7 8 5</Text>
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
    // backgroundColor: "#D31D1A",
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
