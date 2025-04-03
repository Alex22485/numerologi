import { StyleSheet, Text, View } from "react-native";
import {
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";

export default function Module_repeat_sending_code() {
  return (
    <View style={styles.contentView}>
      <Text style={styles.text}> Не приходит письмо?</Text>
      <Text style={styles.text}> Повторить</Text>
      <Text style={styles.text}> через</Text>
      <Text style={styles.text}> 60</Text>
      <Text style={styles.text}> с</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    width: widthWindow * 0.86,
    marginTop: heightWindow * 0.0086,
    flexDirection: "row",
    // backgroundColor: "green",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: Text_App.fs_10,
  },
});
