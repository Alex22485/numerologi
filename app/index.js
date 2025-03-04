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
          LinkBtn={"/flexDirectionRow"}
          textBtn={"FlexDirectioin:Row"}
        />
      </View>

      <Text style={styles.title1}>Свойство у Детей:</Text>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <BtnComponent LinkBtn={"/flexGrow_row"} textBtn={"FlexGrow_row"} />
      </View>
      <View style={{ marginTop: 20, alignItems: "center" }}>
        <BtnComponent
          LinkBtn={"/flexGrow_column"}
          textBtn={"FlexGrow_column"}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title1: {
    marginTop: 15,
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
