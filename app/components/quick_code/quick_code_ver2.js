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

export default function Quick_code_ver2({ textContent, name }) {
  console.log("name: ", name);
  const [quickCode, setQuickCode] = useState({
    qCodeFirst: "",
    cointFirst: "",
    qCodeSecond: "",
    cointSecond: "",
    errorCode: false,
    welcome: false,
  });

  console.log(quickCode);

  const colorTxtTitle = !quickCode.errorCode
    ? quickCode.qCodeFirst.length === 4
      ? Color.green
      : Color.dark_purple
    : Color.error;

  const txtTitle = quickCode.errorCode
    ? "Ошибка, повторите снова "
    : quickCode.qCodeFirst.length === 4
    ? "Подтвердите пароль"
    : textContent;

  if (quickCode.qCodeSecond.length === 4) {
    const compare = quickCode.qCodeFirst === quickCode.qCodeSecond;
    if (compare) {
      console.log("Регистрация успешна");
      setQuickCode((pr) => {
        return {
          qCodeFirst: "",
          cointFirst: "",
          qCodeSecond: "",
          cointSecond: "",
          errorCode: false,
          welcome: true,
        };
      });
      return;
    }
    Vibration.vibrate(400);
    setQuickCode((pr) => {
      return {
        ...pr,
        errorCode: true,
        qCodeFirst: "",
        cointFirst: "",
        qCodeSecond: "",
        cointSecond: "",
      };
    });
  }

  const changeColorQuickCode = (code) => {
    if (
      quickCode.qCodeFirst.length === 4 &&
      quickCode.qCodeSecond.length >= 1
    ) {
      console.log("1");
      setQuickCode((pr) => {
        return {
          ...pr,
          cointFirst: ++pr.cointFirst,
          qCodeSecond: pr.qCodeSecond + "" + code,
        };
      });
      return;
    }
    if (quickCode.qCodeFirst.length === 4) {
      console.log("2");
      setQuickCode((pr) => {
        return {
          ...pr,
          cointFirst: 0,
          qCodeSecond: code,
        };
      });
      return;
    }
    if (!quickCode.qCodeFirst.length) {
      console.log("3");
      setQuickCode((pr) => {
        return { ...pr, cointFirst: 0, qCodeFirst: code, errorCode: false };
      });
      return;
    }
    console.log("4");
    setQuickCode((pr) => {
      return {
        ...pr,
        cointFirst: ++pr.cointFirst,
        qCodeFirst: pr.qCodeFirst + "" + code,
      };
    });
  };
  if (quickCode.welcome) {
    return <Welcome_sheet name={name} />;
  }

  return (
    <View style={styles.content}>
      <Text style={{ ...styles.content_text, color: colorTxtTitle }}>
        {txtTitle}
      </Text>
      <Module_quickCodeInput_ver2 quickCode={quickCode} />
      <Module_customKeyBoard_ver2
        onChangeColorQuickCode={changeColorQuickCode}
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
