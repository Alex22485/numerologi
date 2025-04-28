import { Animated, StyleSheet, Text, View } from "react-native";
import { widthWindow } from "../../../components/tokens";
import { useEffect, useState } from "react";
import Code_content from "./code_content";

export default function Module_Alert_code_verif_ver2({
  onStartShowCode,
  // translateY,
}) {
  // console.log("onStartShowCode: ", onStartShowCode);

  const [isShown, setIsShown] = useState(false);
  // console.log("isShown: ", isShown);

  const animatedCodeShow = new Animated.ValueXY({
    x: 0,
    y: -30,
    // y: translateY,
  });

  const layoutHandler = () => {
    // console.log("onLayout");
    Animated.timing(animatedCodeShow, {
      toValue: { x: 0, y: 10 },
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  const animatedOpacity = new Animated.Value(100);
  const opacityCodeVer = animatedOpacity.interpolate({
    inputRange: [0, 100],
    outputRange: [0, 1],
  });

  // Animated.timing(animatedOpacity, {
  //   toValue: 0,
  //   duration: 10000,
  //   useNativeDriver: true,
  // }).start();

  const pr = () => {
    // console.log(pr);
    Animated.timing(animatedCodeShow, {
      toValue: { x: 0, y: 10 },
      duration: 200,
      useNativeDriver: true,
    }).start();

    Animated.timing(animatedOpacity, {
      toValue: 0,
      duration: 15000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (onStartShowCode === 5) {
      setIsShown(5);
      return;
    }
    if (!onStartShowCode) {
      // setIsShown(false);
      return;
    }
    setIsShown(true);
  }, [onStartShowCode]);

  if (isShown === 5) {
    console.log("1");
    return (
      <Animated.View
        // onLayout={onLayoutHandler()}
        onLayout={pr}
        style={{
          ...styles.content,
          transform: [{ translateX: 0 }, { translateY: 10 }],
          opacity: opacityCodeVer,
        }}
      >
        <Text style={styles.contentText}>4 8 8 0 4</Text>
      </Animated.View>
    );
    // return <Code_content onLayoutHandler={pr} opacity={opacityCodeVer} />;
  }

  if (!isShown) {
    console.log("2");
    return <></>;
  }
  if (isShown) {
    console.log("3");
    return (
      <Animated.View
        onLayout={pr}
        style={{
          ...styles.content,
          transform: [
            { translateX: animatedCodeShow.x },
            { translateY: animatedCodeShow.y },
          ],
          opacity: opacityCodeVer,
        }}
      >
        <Text style={styles.contentText}>4 8 8 0 4</Text>
      </Animated.View>
    );
  }
  // if (isShown) {
  //   console.log("3");
  //   return (
  //     <Code_content
  //       onLayoutHandler={layoutHandler}
  //       animatedCodeShowX={animatedCodeShow.x}
  //       animatedCodeShowY={animatedCodeShow.y}
  //     />
  //   );
  // }
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
