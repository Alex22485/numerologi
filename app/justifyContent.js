import { StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";

export default function JustifyContent() {
  return (
    <View>
      <Text style={styles.title}>justifyContent:</Text>
      <Text style={styles.text}> flex-start</Text>
      <View
        style={{
          backgroundColor: "#F7E2F7",
          justifyContent: "flex-start",
          height: 70,
        }}
      >
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> center</Text>
      <View
        style={{
          backgroundColor: "#F7E2F7",
          justifyContent: "center",
          height: 70,
        }}
      >
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> flex-end</Text>
      <View
        style={{
          backgroundColor: "#F7E2F7",
          justifyContent: "flex-end",
          height: 70,
        }}
      >
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> space-around</Text>
      <View
        style={{
          backgroundColor: "#F7E2F7",
          justifyContent: "space-around",
          height: 70,
        }}
      >
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> space-between</Text>
      <View
        style={{
          backgroundColor: "#F7E2F7",
          justifyContent: "space-between",
          height: 70,
        }}
      >
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> space-evenly</Text>
      <View
        style={{
          backgroundColor: "#F7E2F7",
          justifyContent: "space-evenly",
          height: 70,
        }}
      >
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <View style={styles.ViewBtn}>
        <Link href={"/flexdirectionRow"}>
          <Text style={{ color: "white" }}>На след страницу</Text>
        </Link>
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
});
