import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import ItemComponent from "../assets/itemComponent";
import BtnComponent from "../assets/btnComponent";
import { useState } from "react";

export default function AlighItems() {
  return (
    <View>
      <Text style={styles.title1}>Свойство у контейнера:</Text>
      <Text style={styles.title2}>flexDirection: "column"</Text>

      <View style={styles.ViewBtn}>
        <BtnComponent LinkBtn={"/"} textBtn={"alignItems"} />
        <BtnComponent LinkBtn={"/justifyContent"} textBtn={"justifyContent"} />
      </View>

      <Text style={styles.text}> "stretch" - по умолчанию width=true</Text>
      <ItemComponent alignItems={"stretch"} width={true} isText={false} />

      <Text style={styles.text}> "stretch" width= false</Text>
      <ItemComponent alignItems={"stretch"} width={false} isText={false} />

      <Text style={styles.text}>"flex-start" width = false</Text>
      <ItemComponent alignItems={"flex-start"} width={false} isText={false} />

      <Text style={styles.text}>"flex-start" width = 0 with isText=true</Text>
      <ItemComponent alignItems={"flex-start"} width={false} isText={true} />

      <Text style={styles.text}> "center"</Text>
      <ItemComponent alignItems={"center"} width={true} isText={false} />

      <Text style={styles.text}> "flex-end"</Text>
      <ItemComponent alignItems={"flex-end"} width={true} isText={false} />
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
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
