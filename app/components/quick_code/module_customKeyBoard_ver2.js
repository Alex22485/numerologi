import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  BgColor,
  Color,
  heightWindow,
  Text_App,
  widthWindow,
} from "../../../components/tokens";
import { useAtom } from "jotai";
import {
  getCodeVerification,
  ini,
} from "../../../entities/differentsVal/initialSettings";
import storeDataDell from "./storeDataDell";

export default function Module_customKeyBoard_ver2({ onChangeColorQuickCode }) {
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

  const [initSt] = useAtom(ini);
  const [getCodeVerif, setGetCodeVerif] = useAtom(getCodeVerification);
  console.log("1", getCodeVerif);

  const textBtn = getCodeVerif.localStorageCode ? "Выйти из акаунта" : "";

  // const proba = { ...initSt, inputAuthData: getCodeVerif.inputAuthData };
  // console.log("proba: ", proba);

  const disable_and_backGrColor = (item) => {
    return item === 10 ? [BgColor.bg_white, true] : [BgColor.bg_pink, false];
  };
  return (
    <View style={styles.content}>
      <View style={styles.content_digits}>
        {btnContent.map((item) => {
          return (
            <TouchableOpacity
              key={item.key}
              disabled={disable_and_backGrColor(item.key)[1]}
              style={{
                ...styles.content_item,
                backgroundColor: disable_and_backGrColor(item.key)[0],
              }}
              onPress={() => {
                onChangeColorQuickCode(item.text);
              }}
            >
              <Text style={styles.content_item_Text}>{item.text}</Text>
            </TouchableOpacity>
          );
        })}
      </View>

      <View style={styles.content_textBtn}>
        <TouchableOpacity
          disabled={getCodeVerif.localStorageCode ? false : true}
          onPress={() => {
            //!28/06/25 Выход из авторизации
            storeDataDell("code");
            setGetCodeVerif(() => {
              return { ...initSt, inputAuthData: getCodeVerif.inputAuthData };
            });
            // setGetCodeVerif(initSt);
          }}
        >
          <Text>{textBtn}</Text>
        </TouchableOpacity>
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
  },
  content_digits: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: widthWindow * 0.6233,
    height: heightWindow * 0.3519,
    justifyContent: "space-between",
    alignContent: "space-between",
  },
  content_item: {
    width: widthWindow * 0.156,
    height: heightWindow * 0.065,
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
