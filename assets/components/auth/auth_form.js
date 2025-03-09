import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import { Title } from "../../../components/tokens";
import TextInputItem from "./textInputItem";
import Auth_Btn from "./auth_btn";
import { useState } from "react";

const heightWindow = Dimensions.get("window").height;
const widthWindow = Dimensions.get("window").width;

export default function Auth_form() {
  const [isFocus, setIsFocus] = useState("");
  const arrPlaceHolder = ["Ваше Имя", "Телефон", "Email", "Password"];
  const isFocusHandler = (placeholderRef) => {
    setIsFocus(placeholderRef);
  };
  return (
    <View style={styles.conteiner_form}>
      <View style={styles.form}>
        {arrPlaceHolder.map((item) => {
          return (
            <TextInputItem
              key={item}
              placeholder={item}
              isFocus={isFocus}
              heightWindow={heightWindow}
              OnIsFocusHandler={isFocusHandler}
            />
          );
        })}
      </View>
      <Auth_Btn heightWindow={heightWindow} />
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner_form: {
    marginTop: heightWindow * 0.084,
    height: heightWindow * 0.467,
    width: widthWindow * 0.86,
    justifyContent: "space-between",
  },
  form: {
    height: heightWindow * 0.303,
    justifyContent: "space-between",
  },
  form_inputText: {
    height: heightWindow * 0.052,
    backgroundColor: Title.color_white,
    borderRadius: 4,
  },
});
