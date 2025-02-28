import { Text, View, StyleSheet } from "react-native";
import ItemComponent from "../assets/itemComponent";
import BtnComponent from "../assets/btnComponent";

export default function flexdirectionRow_alignItems() {
  return (
    <View>
      <Text style={styles.title}>2. flexdirection: "row"</Text>
      <Text style={styles.title2}> alignItems:</Text>

      <Text style={styles.text}> "stretch" width: true</Text>
      <ItemComponent
        flexDirection={"row"}
        alignItems={"stretch"}
        width={true}
        isText={false}
        height={30}
      />

      <Text style={styles.text}> "flex-start" width: true</Text>
      <ItemComponent
        flexDirection={"row"}
        alignItems={"flex-start"}
        width={true}
        isText={false}
        height={30}
      />

      <Text style={styles.text}> "stretch" width: false</Text>
      <ItemComponent
        flexDirection={"row"}
        alignItems={"stretch"}
        width={false}
        isText={false}
        height={30}
      />

      <Text style={styles.text}> "flex-start" width: false</Text>
      <ItemComponent
        flexDirection={"row"}
        alignItems={"flex-start"}
        width={false}
        isText={false}
        height={30}
      />

      <Text style={styles.text}> "center" width: false </Text>
      <ItemComponent
        flexDirection={"row"}
        alignItems={"center"}
        width={false}
        isText={true}
        height={30}
      />
      <Text style={styles.text}> "center" width: true </Text>
      <ItemComponent
        flexDirection={"row"}
        alignItems={"center"}
        width={true}
        isText={true}
        height={30}
      />

      <Text style={styles.text}> "flex-end" width: true </Text>
      <ItemComponent
        flexDirection={"row"}
        alignItems={"flex-end"}
        width={true}
        isText={false}
        height={50}
      />

      <View style={styles.ViewBtn}>
        <BtnComponent
          LinkBtn={"/flexdirectionRow_justifyContent"}
          textBtn={"justufyContent"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
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
  container: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },

  text: {
    marginTop: 10,
    textAlign: "center",
  },
  ViewBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
