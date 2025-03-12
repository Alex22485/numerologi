import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  View,
  alert,
} from "react-native";
import { Title } from "../../../components/tokens";
import TextInputItem from "./textInputItem";
import Auth_Btn from "./auth_btn";
import { useState } from "react";

const heightWindow = Dimensions.get("window").height;
const widthWindow = Dimensions.get("window").width;

export default function Auth_form() {
  const arrPlaceHolder = ["Ваше Имя:", "Телефон: +7...", "Email:", "Пароль:"];
  const firstState = {
    "Ваше Имя:": "",
    "Телефон: +7...": "",
    "Email:": "",
    "Пароль:": "",
  };

  const [valueForm, setValueForm] = useState(firstState);
  console.log("valueForm: ", valueForm);

  const changeHandler = (placeholder, value) => {
    setValueForm((prevItem) => {
      return { ...prevItem, [placeholder]: value };
    });
  };

  const onPressBtn = () => {
    console.log("fff", valueForm);
  };
  return (
    <View style={styles.conteiner_form}>
      <View style={styles.form}>
        {arrPlaceHolder.map((item, index) => {
          return (
            <TextInputItem
              key={item}
              valueForm={valueForm}
              placeholder={item}
              heightWindow={heightWindow}
              onChangeHandler={changeHandler}
              inputMode={
                index === 0
                  ? "text"
                  : index === 1
                  ? "tel"
                  : index === 2
                  ? "email"
                  : "none"
              }
            />
          );
        })}
      </View>
      <Auth_Btn onPressHandler={onPressBtn} heightWindow={heightWindow} />
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
