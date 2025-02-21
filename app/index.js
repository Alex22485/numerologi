import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    // container располагается на всю ширину экрана т.к. не имеет ширины
    <View>
      <Text style={styles.title1}>Свойство у контейнера:</Text>
      <Text style={styles.title2}>1. flexDirection: "column"</Text>

      <Text style={styles.text}> - alignItems: "stretch" - по умолчанию</Text>
      <View style={{ backgroundColor: "#F7E2F7", alignItems: "stretch" }}>
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> - Первый ViewItem не имеет ширину</Text>
      <View style={{ backgroundColor: "#F7E2F7", alignItems: "stretch" }}>
        <View style={{ backgroundColor: "tomato", height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}>
        - alignItems: "flex-start первый item без ширины"
      </Text>
      <View style={{ backgroundColor: "#F7E2F7", alignItems: "flex-start" }}>
        <View style={{ backgroundColor: "tomato", height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}>
        - alignItems: "flex-start первый item без ширины НО с содержимым"
      </Text>
      <View style={{ backgroundColor: "#F7E2F7", alignItems: "flex-start" }}>
        <View style={{ backgroundColor: "tomato", height: 15 }}>
          <Text>qвываыв</Text>
        </View>
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> - alignItems: "center"</Text>
      <View style={{ backgroundColor: "#F7E2F7", alignItems: "center" }}>
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <Text style={styles.text}> - alignItems: "flex-end"</Text>
      <View style={{ backgroundColor: "#F7E2F7", alignItems: "flex-end" }}>
        <View style={{ backgroundColor: "tomato", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>

      <View style={styles.ViewBtn}>
        <Link href={"/justifyContent"}>
          <Text style={{ color: "white" }}>Перейти на другую страницу</Text>
        </Link>
      </View>

      <Text style={{ color: "black", marginTop: 5 }}>
        Кнопка - это текст, обернутая в link, и выше во View. Свойство View :
        alignItems: "center", justifyContent: "center",
      </Text>
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
});
