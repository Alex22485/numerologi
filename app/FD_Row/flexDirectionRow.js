import { StyleSheet, Text, View } from "react-native";
import BtnComponent from "../../assets/btnComponent";

export default function flexDirectioinRow() {
  return (
    <View>
      <Text style={styles.title}>2. flexdirection: "row"</Text>

      <View style={styles.ViewBtn}>
        <BtnComponent
          LinkBtn={"/flexdirectionRow_alignItems"}
          textBtn={"alignItems"}
        />
        <BtnComponent
          LinkBtn={"/flexdirectionRow_justifyContent"}
          textBtn={"justifyContent"}
        />
        <BtnComponent
          LinkBtn={"/flexdirectionColumn_FlexWrap"}
          textBtn={"flexWrap_Column"}
        />
        <BtnComponent
          LinkBtn={"/flexdirectionRow_FlexWrap"}
          textBtn={"flexWrap_Row"}
        />

        <View style={styles.lastBtn}>
          <Text
            style={{ ...styles.title2, fontWeight: "350", marginBottom: 10 }}
          >
            Свойство у ребенка:
          </Text>
          <BtnComponent
            LinkBtn={"/flexdirectionRow_alignSelf"}
            textBtn={"alignSelf"}
          />
        </View>
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
  title2: {
    marginTop: 5,
    textAlign: "center",
    fontSize: 18,
    marginLeft: 40,
    marginRight: 40,
    fontWeight: "bold",
  },
  ViewBtn: {
    marginTop: 30,

    flexDirection: "column",
    height: 250,
    alignItems: "center",
    justifyContent: "space-between",
  },
  lastBtn: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "pink",
  },
});
