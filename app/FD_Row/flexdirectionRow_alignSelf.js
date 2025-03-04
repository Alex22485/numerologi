import { StyleSheet, Text, View } from "react-native";
import ItemComponent from "../../assets/itemComponent";

export default function flexdirectionRow_alignSelf() {
  return (
    <View>
      <Text style={styles.title}>2. flexDirection: "row"</Text>
      <Text style={styles.title2}> conteiner flex-end </Text>

      <Text style={styles.title3}> 2-th Item alignSelf: center </Text>
      <View style={styles.conteiner}>
        <View style={{ ...styles.item, ...styles.item1 }} />
        <View
          style={{ ...styles.item, ...styles.item2, alignSelf: "center" }}
        />
        <View style={{ ...styles.item, ...styles.item3 }} />
      </View>

      <Text style={styles.title3}> 1-th Item alignSelf: flex-start </Text>
      <View style={styles.conteiner}>
        <View
          style={{ ...styles.item, ...styles.item1, alignSelf: "flex-start" }}
        />
        <View style={{ ...styles.item, ...styles.item2 }} />
        <View style={{ ...styles.item, ...styles.item3 }} />
      </View>

      <Text style={styles.title3}> 3-th Item alignSelf: center </Text>
      <View style={styles.conteiner}>
        <View style={{ ...styles.item, ...styles.item1 }} />
        <View style={{ ...styles.item, ...styles.item2 }} />
        <View
          style={{ ...styles.item, ...styles.item3, alignSelf: "center" }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "space-around",
    backgroundColor: "#F7E2F7",
    height: 75,
  },
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
  title3: {
    paddingTop: 25,
    textAlign: "center",
    fontSize: 18,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: "100",
  },
  item: {
    height: 25,
    width: 25,
  },
  item1: {
    backgroundColor: "red",
  },
  item2: {
    backgroundColor: "green",
  },
  item3: {
    backgroundColor: "yellow",
  },
});
