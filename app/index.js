import BtnComponent from "../assets/btnComponent";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View>
      <Text style={styles.title1}>Свойство у контейнера:</Text>

      <View style={styles.ViewBtn}>
        <BtnComponent
          LinkBtn={"/flexdirectionColumn_alignItems"}
          textBtn={"FlexDirectioin:Column"}
        />
        <BtnComponent
          LinkBtn={"/flexdirectionRow_alignItems"}
          textBtn={"FlexDirectioin:Row"}
        />
      </View>
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

  ViewBtn: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
