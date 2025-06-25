import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  BgColor,
  Color,
  heightWindow,
  Text_App,
} from "../../../components/tokens";
import Module_quickCodeInput_ver2 from "./module_quickCodeInput_ver2";
import Module_customKeyBoard_ver2 from "./module_customKeyBoard_ver2";
import { Vibration } from "react-native";
import Welcome_sheet from "../welcome_sheet/welcome_sheet";
import storeDataWrite from "./storeDataWrite";
import storeDataDell from "./storeDataDell";
import settingsTxtTitle_ver3 from "./settingsTxtTitle_ver3";

export default function Quick_code_ver3({
  getCodeVerif,
  OnInputWithMainPassword,
}) {
  // console.log("locSt", getCodeVerif.localStorageCode);
  const qCode = {
    qCodeFirst: "",
    cointFirst: 0,
    qCodeSecond: "",
    errorCode: false,
    welcome: false,
    localStorage: "",
  };
  const [quickCode, setQuickCode] = useState(qCode);
  // console.log("quickCode: ", quickCode);

  useEffect(() => {
    if (getCodeVerif.localStorageCode) {
      setQuickCode((pr) => {
        return {
          ...pr,
          qCodeFirst: getCodeVerif.localStorageCode,
          cointFirst: 4,
          localStorage: getCodeVerif.localStorageCode,
        };
      });
    }
  }, []);

  if (quickCode.qCodeSecond.length === 4) {
    const compare = quickCode.qCodeFirst === quickCode.qCodeSecond;
    if (compare) {
      // writing quickCode  in localStorage
      storeDataWrite(quickCode.qCodeFirst);
      setQuickCode(() => {
        return {
          ...qCode,
          welcome: true,
        };
      });
      return;
    }
    Vibration.vibrate(400);
    setQuickCode((pr) => {
      return {
        ...qCode,
        qCodeFirst: getCodeVerif.localStorageCode,
        cointFirst: getCodeVerif.localStorageCode ? 4 : "",
        errorCode: true,
        localStorage: getCodeVerif.localStorageCode,
      };
    });
  }

  const changeColorQuickCode = (code) => {
    setQuickCode((pr) => {
      return {
        ...pr,
        qCodeFirst:
          pr.cointFirst < 4 ? pr.qCodeFirst + "" + code : pr.qCodeFirst,
        cointFirst: ++pr.cointFirst,
        qCodeSecond: pr.cointFirst > 4 ? pr.qCodeSecond + "" + code : "",
        errorCode: pr.errorCode ? false : pr.errorCode,
      };
    });
  };

  return quickCode.welcome ? (
    <Welcome_sheet name={getCodeVerif.inputAuthData["Ваше Имя:"]} />
  ) : (
    <View style={styles.content}>
      <Text
        style={{
          ...styles.content_text,
          // color: settingsTxtTitle(
          color: settingsTxtTitle_ver3(
            quickCode,
            getCodeVerif.localStorageCode
          )[0],
        }}
      >
        {/* {settingsTxtTitle(quickCode, getCodeVerif.textForQuickCodeView)[1]} */}
        {settingsTxtTitle_ver3(quickCode, getCodeVerif.localStorageCode)[1]}
      </Text>
      <Module_quickCodeInput_ver2 quickCode={quickCode} />
      <Module_customKeyBoard_ver2
        onChangeColorQuickCode={changeColorQuickCode}
        localStorageCode={getCodeVerif.localStorageCode}
        OnExitAuth={() => {
          storeDataDell("code");
          OnInputWithMainPassword();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: BgColor.bg_white,
    alignContent: "center",
  },
  content_text: {
    marginTop: heightWindow * 0.0966,
    fontSize: Text_App.fs_17,
    color: Color.dark_purple,
  },
});
