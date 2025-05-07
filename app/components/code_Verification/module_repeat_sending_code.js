import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";
import { useEffect, useState } from "react";

export default function Module_repeat_sending_code({ codeSuccessHandler }) {
  const [valueSecond, setValueSecond] = useState(12);

  useEffect(() => {
    if (valueSecond !== 0) {
      const interval = setInterval(() => {
        // console.log("таймер");
        setValueSecond((item) => {
          // console.log("item: ", item);
          return item - 1;
        });
      }, 1000);
      return () => {
        // console.log("очистка");
        clearInterval(interval);
      };
    }
  }, [valueSecond]);

  if (codeSuccessHandler === "No") {
    return (
      <View style={styles.contentView}>
        <Text style={styles.text}> Пароль не верен</Text>
      </View>
    );
  }
  return (
    <View style={styles.contentView}>
      <Text style={styles.text}> Не приходит письмо?</Text>
      <TouchableOpacity disabled={valueSecond !== 0 ? true : false}>
        <Text style={valueSecond !== 0 ? styles.text : styles.text_time_s_UP}>
          {" "}
          Повторить
        </Text>
      </TouchableOpacity>

      <Text style={styles.text}> через </Text>
      <Text style={styles.text}>
        {" "}
        {valueSecond >= 10 ? valueSecond : "  " + valueSecond}
      </Text>
      <Text style={styles.text}> с</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contentView: {
    width: widthWindow * 0.86,
    marginTop: heightWindow * 0.0086,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  text: {
    fontSize: Text_App.fs_10,
  },
  text_time_s_UP: {
    fontSize: Text_App.fs_10,
    fontWeight: "bold",
    color: Color.brown,
  },
});
