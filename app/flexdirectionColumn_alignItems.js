import { StyleSheet, Text, View } from "react-native";
import ItemComponent from "../assets/itemComponent";
import BtnComponent from "../assets/btnComponent";

export default function flexdirectionColumn_alignItems() {
  return (
    <View>
      <Text style={styles.title2}>1. flexDirection: "Column"</Text>
      <Text style={styles.title2}>alignItems: </Text>

      <Text style={styles.text}> "stretch" - по умолчанию width=true</Text>
      <ItemComponent alignItems={"stretch"} width={true} isText={false} />

      <Text style={styles.text}> "stretch" width= false</Text>
      <ItemComponent alignItems={"stretch"} width={false} isText={false} />

      <Text style={styles.text}>"flex-start" width = false</Text>
      <ItemComponent alignItems={"flex-start"} width={false} isText={false} />

      <Text style={styles.text}>"flex-start" width = false isText=true</Text>
      <ItemComponent alignItems={"flex-start"} width={false} isText={true} />

      <Text style={styles.text}> "center"</Text>
      <ItemComponent alignItems={"center"} width={true} isText={false} />

      <Text style={styles.text}> "flex-end"</Text>
      <ItemComponent alignItems={"flex-end"} width={true} isText={false} />

      <View style={styles.ViewBtn}>
        <BtnComponent
          LinkBtn={"flexdirectionColumn_justifyContent"}
          textBtn={"justufyContent"}
        />
      </View>
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
