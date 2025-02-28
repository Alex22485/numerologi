import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import BtnComponent from "../assets/btnComponent";
import ItemComponent from "../assets/itemComponent";

export default function flexdirectionColumn_justifyContent() {
  return (
    <View>
      <Text style={styles.title2}>flexDirection: "Column"</Text>
      <Text style={styles.title2}>justifyContent: </Text>

      <Text style={styles.text}> flex-start</Text>
      <ItemComponent justifyContent={"flex-start"} height={70} />

      <Text style={styles.text}> center</Text>
      <ItemComponent justifyContent={"center"} height={70} />

      <Text style={styles.text}> flex-end</Text>
      <ItemComponent justifyContent={"flex-end"} height={70} />

      <Text style={styles.text}> space-around</Text>
      <ItemComponent justifyContent={"space-around"} height={70} />

      <Text style={styles.text}> space-between</Text>
      <ItemComponent justifyContent={"space-between"} height={70} />

      <Text style={styles.text}> space-evenly</Text>
      <ItemComponent justifyContent={"sspace-evenly"} height={70} />
    </View>
  );
}

const styles = StyleSheet.create({
  title1: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 20,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: "bold",
  },
  title2: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 18,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: "bold",
  },
  text: {
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "400",
  },
  ViewBtn: {
    marginTop: 20,
    marginLeft: 55,
    marginRight: 55,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#887088",
    height: 48,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: "black",
  },
  ViewBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
