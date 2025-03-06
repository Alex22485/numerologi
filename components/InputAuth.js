import { View, StyleSheet, TextInput } from "react-native";

export default function InputAuth({ placeHolder }) {
  return (
    <View style={styles.inputView}>
      <TextInput
        style={styles.inputView_item}
        placeholder={placeHolder}
        placeholderTextColor="#A686A6"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputView: {
    marginBottom: 29,
    width: "85%",
    alignSelf: "center",
  },
  inputView_item: {
    height: 48,
    backgroundColor: "#D9D9D9",
    borderRadius: 10,
    borderColor: "#16171D",
    paddingLeft: 22,
    fontSize: 17,
    lineHeight: 22,
    color: "#361F36",
    activeOutlineColor: "white",
  },
});
