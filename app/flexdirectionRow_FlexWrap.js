import { StyleSheet, Text, View } from "react-native";

export default function flexdirectionRow_FlexWrap() {
  return (
    <View>
      <Text style={styles.title1}> NoWrap</Text>
      <View style={{ ...styles.conteiner }}>
        <View style={{ ...styles.item, ...styles.item1 }} />
        <View style={{ ...styles.item, ...styles.item2 }} />
        <View style={{ ...styles.item, ...styles.item3 }} />
      </View>
      <Text style={styles.title1}> flexWrap</Text>
      <View style={{ ...styles.conteiner, ...styles.conteiner_Wrap }}>
        <View style={{ ...styles.item, ...styles.item1 }} />
        <View style={{ ...styles.item, ...styles.item2 }} />
        <View style={{ ...styles.item, ...styles.item3 }} />
      </View>
      <Text style={styles.title1}> WrapReverse</Text>
      <View style={{ ...styles.conteiner, ...styles.conteiner_Wrap_reverse }}>
        <View style={{ ...styles.item, ...styles.item1 }} />
        <View style={{ ...styles.item, ...styles.item2 }} />
        <View style={{ ...styles.item, ...styles.item3 }} />
      </View>
      <Text style={styles.title1}> WrapReverse & alignContent</Text>
      <View
        style={{
          ...styles.conteiner,
          ...styles.conteiner_Wrap_reverse_alignContentse,
        }}
      >
        <View style={{ ...styles.item, ...styles.item1 }} />
        <View style={{ ...styles.item, ...styles.item2 }} />
        <View style={{ ...styles.item, ...styles.item3 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: "row",
    flexWrap: "nowrap",
    backgroundColor: "#F7E2F7",
    height: 80,
  },
  conteiner_Wrap: {
    flexWrap: "wrap",
  },
  conteiner_Wrap_reverse: {
    flexWrap: "wrap-reverse",
  },
  conteiner_Wrap_reverse_alignContentse: {
    height: 150,
    flexWrap: "wrap-reverse",
    alignContent: "center",
  },
  title1: {
    marginTop: 15,
    marginBottom: 5,
    textAlign: "center",
    fontSize: 20,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: "bold",
  },
  item: {
    height: 30,
    width: "49%",
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
