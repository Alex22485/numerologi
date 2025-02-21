import { Text, View, StyleSheet } from "react-native";

export default function FlexdirectionRow() {
  return (
    <View>
      <Text style={styles.title}>2. flexdirection: "row"</Text>

      <Text style={styles.text}> - alignItems: "flex-start"</Text>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          backgroundColor: "#F7E2F7",
          alignItems: "fl",
        }}
      >
        <View style={{ backgroundColor: "tomato", height: 15 }}>
          <Text>d</Text>
        </View>
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> - justifyContent: "flex-start"</Text>
      <View
        style={{
          flexDirection: "row",
          height: 50,
          backgroundColor: "#F7E2F7",
          alignItems: "center",
        }}
      >
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
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
});
