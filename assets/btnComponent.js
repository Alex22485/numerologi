import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function BtnComponent({ LinkBtn, textBtn }) {
  console.log("LinkBtn: ", LinkBtn);
  return (
    <View style={styles.ViewBtn_item}>
      <Link href={LinkBtn}>
        <Text style={{ color: "white" }}>{textBtn}</Text>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  ViewBtn_item: {
    width: "45%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#887088",
    height: 30,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
  },
});
