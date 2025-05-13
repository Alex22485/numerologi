import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BgColor,
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";

export default function Module_customKeyBoard({
  textBtn = "",
  onChangeColorQuickCode,
}) {
  const btnContent = [
    { key: 1, text: "1" },
    { key: 2, text: "2" },
    { key: 3, text: "3" },
    { key: 4, text: "4" },
    { key: 5, text: "5" },
    { key: 6, text: "6" },
    { key: 7, text: "7" },
    { key: 8, text: "8" },
    { key: 9, text: "9" },
    { key: 10, text: "" },
    { key: 11, text: "0" },
    { key: 12, text: "dell" },
  ];
  return (
    <View style={styles.content}>
      <View style={styles.content_digits}>
        {btnContent.map((item) => {
          return (
            <TouchableOpacity
              disabled={item.key === 10 ? true : false}
              onPress={() => {
                onChangeColorQuickCode(item.text);
              }}
              style={{
                ...styles.content_item,
                backgroundColor:
                  item.key === 10 ? BgColor.bg_white : BgColor.bg_pink,
              }}
              key={item.key}
            >
              <Text style={styles.content_item_Text}>{item.text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.content_textBtn}>
        <Text>{textBtn}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    marginTop: heightWindow * 0.0966,
    padding: widthWindow * 0.07442,
    width: widthWindow * 0.7721,
    height: heightWindow * 0.47103,
    // backgroundColor: "yellow",
  },
  content_digits: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: widthWindow * 0.6233,
    height: heightWindow * 0.3519,
    justifyContent: "space-between",
    alignContent: "space-between",
    // backgroundColor: "blue",
  },
  content_item: {
    width: widthWindow * 0.156,
    height: heightWindow * 0.065,
    // marginLeft: widthWindow * 0.07442,
    // marginRight: widthWindow * 0.07442,
    textAlign: "center",
    verticalAlign: "middle",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: BgColor.bg_pink,
    color: Color.dark_purple,
  },
  content_item_Text: {
    textAlign: "center",
    fontSize: Text_App.fs_20,
    fontWeight: "400",
  },

  content_textBtn: {
    marginTop: heightWindow * 0.06237,
    alignSelf: "center",
  },
});
