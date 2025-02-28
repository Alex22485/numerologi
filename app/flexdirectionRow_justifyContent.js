import { StyleSheet, Text, View } from "react-native";
import ItemComponent from "../assets/itemComponent";

export default function flexdirectionRow_justifyContent() {
  return (
    <View>
      <Text style={styles.title2}>2. flexDirection: "row"</Text>
      <Text style={styles.title2}>justifyContent: </Text>

      <Text style={styles.text}> flex-start</Text>
      <ItemComponent
        flexDirection={"row"}
        justifyContent={"flex-start"}
        height={35}
      />
      <Text style={styles.text}> center</Text>
      <ItemComponent
        flexDirection={"row"}
        justifyContent={"center"}
        height={35}
      />

      <Text style={styles.text}> flex-end</Text>
      <ItemComponent
        flexDirection={"row"}
        justifyContent={"flex-end"}
        height={35}
      />

      <Text style={styles.text}> space-around</Text>
      <ItemComponent
        flexDirection={"row"}
        justifyContent={"space-around"}
        height={35}
      />

      <Text style={styles.text}> space-between</Text>
      <ItemComponent
        flexDirection={"row"}
        justifyContent={"space-between"}
        height={35}
      />

      <Text style={styles.text}> space-evenly</Text>
      <ItemComponent
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        height={35}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    marginBottom: 5,
    textAlign: "center",
    fontWeight: "400",
  },
  title2: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 18,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: "bold",
  },
  ViewBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
