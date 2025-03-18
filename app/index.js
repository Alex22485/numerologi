import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Auth from "./auth/auth";

export default function App() {
  const [timeView, SetTimeView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      SetTimeView(true);
    }, 3000);
  }, []);

  if (timeView) {
    return (
      <>
        <Auth />
        <Link href={"/code_verification/input_code_verification"}>
          <View>
            <Text style={{ height: 50, backgroundColor: "pink" }}>ff</Text>
          </View>
        </Link>
      </>
    );
    // return <Auth />;
  }
  return (
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
    // width: 300,
    height: "70%",
    resizeMode: "contain",
  },
});
