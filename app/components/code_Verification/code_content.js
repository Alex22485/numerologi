import { Animated, StyleSheet, Text, View } from "react-native";
import { widthWindow } from "../../../components/tokens";

export default function Code_content({
  onLayoutHandler,
  animatedCodeShowX = 0,
  animatedCodeShowY = 10,
  opacity = 1,
}) {
  console.log("opacity", opacity);
  return (
    <Animated.View
      onLayout={onLayoutHandler()}
      style={{
        ...styles.content,
        transform: [
          { translateX: animatedCodeShowX },
          { translateY: animatedCodeShowY },
        ],
        opacity: opacity,
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
