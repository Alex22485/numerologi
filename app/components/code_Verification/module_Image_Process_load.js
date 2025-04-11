import { Animated, Image, StyleSheet, View } from "react-native";
import { heightWindow } from "../../../components/tokens";
import Module_Image_Process_load_Animaing from "./module_Image_Process_load_Animaing";

export default function Module_Image_Process_load({ startStopRotated }) {
  const animatedLoadView = new Animated.Value(0);
  const rotate = animatedLoadView.interpolate({
    inputRange: [0, 100],
    outputRange: ["0deg", "360deg"],
  });

  Module_Image_Process_load_Animaing(animatedLoadView);
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
