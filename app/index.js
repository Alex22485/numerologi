import { useEffect, useState } from "react";
import { StyleSheet, View, Image } from "react-native";
import Auth from "./auth";
import { useAtom } from "jotai";
import { profileAtom } from "../entities/user/model/user_state";

export default function App() {
  // const [profile] = useAtom(profileAtom);
  // console.log("profile_index: ", profile.profile?.name);

  const [timeView, SetTimeView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetTimeView(true);
    }, 3100);
  }, []);

  return timeView ? (
    <Auth />
  ) : (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/FirsPicturePage.png")}
      ></Image>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A686A6",
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    // положение и размер картинки на экране
    marginTop: -50,
    height: "70%",
    resizeMode: "contain",
  },
});
