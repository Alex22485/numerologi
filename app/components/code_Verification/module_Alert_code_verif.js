import { useEffect, useState } from "react";
import { Animated, StyleSheet, Text } from "react-native";
import { widthWindow } from "../../../components/tokens";

export default function Module_Alert_code_verif({ translateY, isOpacity }) {
  console.log("translateY: ", translateY);
  const [isShown, setIsShown] = useState(false);
  const [proba, setProba] = useState(true);

  const alertCodeVerification = new Animated.ValueXY({
    x: 0,
    y: translateY,
  });
  Animated.timing(alertCodeVerification, {
    toValue: { x: 0, y: 10 },
    duration: 200,
    useNativeDriver: true,
  }).start();

  const animatedOpacity = new Animated.Value(100);
  const opacityCodeVer = animatedOpacity.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  });
  //   Animated.timing(animatedOpacity, {
  //     toValue: 0,
  //     duration: 10000,
  //     useNativeDriver: true,
  //   }).start();

  //   if (isOpacity && proba) {
  if (isOpacity && proba) {
    // setProba(false);
    console.log("proba: ", proba);
    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    // const timer = setTimeout(() => {
    //   console.log("timer");
    //   setProba(false);
    // }, 6000);

    // return () => {
    //   clearTimeout(timer);
    // };
  }

  useEffect(() => {
    console.log("useEffect");
    if (!isShown) {
      const timer = setTimeout(() => {
        setIsShown(true);
      }, 5000);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [isShown]);

  if (!isShown) {
    return <></>;
  }

  return (
    <Animated.View
      style={{
        ...styles.content,
        transform: [
          { translateX: alertCodeVerification.x },
          { translateY: alertCodeVerification.y },
        ],
        opacity: opacityCodeVer,
      }}
    >
      <Text style={styles.contentText}>4 8 8 0 4</Text>
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
