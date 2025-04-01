import { Dimensions, StyleSheet, View } from "react-native";
import TextInputItem from "./textInputItem";
import Auth_Btn from "./auth_btn";
import { useState } from "react";
import { heightWindow, widthWindow } from "../../../components/tokens";

export default function Auth_form({ onPressAuth }) {
  const arrPlaceHolder = ["Ваше Имя:", "Телефон: +7", "Email:", "Пароль:"];
  const firstState = {
    "Ваше Имя:": "",
    "Телефон: +7": "",
    "Email:": "",
    "Пароль:": "",
  };

  const [valueForm, setValueForm] = useState(firstState);

  const changeHandler = (placeholder, value) => {
    setValueForm((prevItem) => {
      return { ...prevItem, [placeholder]: value };
    });
  };

  const onPressBtn = () => {
    onPressAuth(valueForm);
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
              onChangeHandler={changeHandler}
              inputMode={
                index === 0
                  ? "text"
                  : index === 1
                  ? "tel"
                  : index === 2
                  ? "email"
                  : "text"
              }
            />
          );
        })}
        <View>
          <View style={styles.auth_Btn}>
            <Auth_Btn onPressHandler={onPressBtn} OnValueForm={valueForm} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  conteiner_form: {
    marginTop: heightWindow * 0.05,
    height: heightWindow * 0.476,
    width: widthWindow * 0.86,
    justifyContent: "space-between",
  },
  form: {
    height: heightWindow * 0.303,
  },
  auth_Btn: {
    marginTop: heightWindow * 0.0869,
  },
});
