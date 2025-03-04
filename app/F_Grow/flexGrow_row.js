import { StyleSheet, Text, View } from "react-native";

export default function flexGrow_row() {
  return (
    <View>
      <Text style={styles.title1}>flexGrow_row</Text>
      <Text style={styles.title3}>
        Работает только в случае с одинаковым наполнением контента
      </Text>

      <Text style={styles.title2}>Without FlexGrow:1</Text>
      <View style={{ ...styles.conteiner }}>
        <View style={{ ...styles.item, ...styles.item1 }}>
          <Text>A</Text>
        </View>
        <View style={{ ...styles.item, ...styles.item2 }}>
          <Text>B</Text>
        </View>
        <View style={{ ...styles.item, ...styles.item3 }}>
          <Text>C</Text>
        </View>
      </View>

      <Text style={styles.title2}>1th Item FlexGrow:1</Text>
      <View style={{ ...styles.conteiner }}>
        <View style={{ ...styles.item, ...styles.item1, flexGrow: 1 }}>
          <Text>A</Text>
        </View>
        <View style={{ ...styles.item, ...styles.item2 }}>
          <Text>B</Text>
        </View>
        <View style={{ ...styles.item, ...styles.item3 }}>
          <Text>C</Text>
        </View>
      </View>

      <Text style={styles.title2}>1th and 2th Item FlexGrow:1</Text>
      <View style={{ ...styles.conteiner }}>
        <View style={{ ...styles.item, ...styles.item1, flexGrow: 1 }}>
          <Text>A</Text>
        </View>
        <View style={{ ...styles.item, ...styles.item2, flexGrow: 1 }}>
          <Text>B</Text>
        </View>
        <View style={{ ...styles.item, ...styles.item3 }}>
          <Text>C</Text>
        </View>
      </View>

      <Text style={styles.title2}>1th and 2thand 3th Item FlexGrow:1</Text>
      <View style={{ ...styles.conteiner }}>
        <View style={{ ...styles.item, ...styles.item1, flexGrow: 1 }}>
          <Text>A</Text>
        </View>
        <View style={{ ...styles.item, ...styles.item2, flexGrow: 1 }}>
          <Text>B</Text>
        </View>
        <View style={{ ...styles.item, ...styles.item3, flexGrow: 1 }}>
          <Text>C</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  conteiner: {
    // width: "100%",
    flexDirection: "row",
    backgroundColor: "#F7E2F7",
    height: 70,
  },
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
    fontSize: 20,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: "400",
  },
  title3: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 15,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: "300",
  },
  item: {
    height: 30,
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
  ViewBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
