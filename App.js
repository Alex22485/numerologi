import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // container располагается на всю ширину экрана т.к. не имеет ширины
    <View>
      <Text
        style={{
          marginTop: 40,
          textAlign: "center",
          fontSize: 16,
        }}
      >
        Свойство alignItems: "stretch"
      </Text>
      <Text
        style={{
          // marginTop: 2,
          // marginBottom: 2,
          textAlign: "center",
          fontSize: 14,
        }}
      >
        "stretch" - по умолчанию
      </Text>
      <Text style={{ marginTop: 20, marginBottom: 5 }}>
        Все три flex элемента View имеют ширину
      </Text>
      <View style={styles.container}>
        <View style={{ backgroundColor: "tomato", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "purple", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
      </View>
      <Text style={{ marginTop: 20, marginBottom: 5 }}>
        Первый элемент View не имеет ширину поэтому расстягивается на всю
      </Text>
      <View style={styles.container}>
        <View style={{ backgroundColor: "tomato", height: 100 }} />
        <View style={{ backgroundColor: "purple", width: 100, height: 100 }} />
        <View style={{ backgroundColor: "green", width: 100, height: 100 }} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "yellow",
    alignItems: "stretch",
  },
});
