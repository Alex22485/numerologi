import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { heightWindow, widthWindow } from "../components/tokens";
import TextInputItem from "./components/auth/textInputItem";
import storeDataObjGet from "./components/quick_code/storeDataObjGet";
import { useAtom } from "jotai";
import { getCodeVerification } from "../entities/differentsVal/initialSettings";
import Btn from "./Btn/btn";

export default function Auth_form_Universal({
  includeForm,
  btnText = "",
  textUnderBtn,
  onGoToWelcomSheet,
}) {
  const [getCodeVerif, setGetCodeVerif] = useAtom(getCodeVerification);
  console.log("getCodeVerif: ", getCodeVerif);

  // Преобразование массива в объект
  const includeFormObj = includeForm.reduce((object, value) => {
    return { ...object, [value]: "" };
  }, {});
  //! Вводимые данные в форму
  const [valueForm, setValueForm] = useState(includeFormObj);
  const [compairPassword, setCompairPassword] = useState("");
  const [dataError, setDataError] = useState({ isError: false, textError: "" });

  const inputMode = (index) => {
    return index === 0
      ? "text"
      : index === 1
      ? "text"
      : index === 2
      ? "email"
      : "text";
  };

  useEffect(() => {
    // сравнение введенного кода верно, вход в профиль
    if (compairPassword.code === "succssess") {
      onGoToWelcomSheet(valueForm);
    } // сравнение введенного кода НЕверно, не верный телефон
    if (compairPassword.code === "notAuth") {
      setDataError((pr) => {
        return { ...pr, isError: true, textError: "notAuth" };
      });
    }
    // сравнение введенного кода НЕверно, не верный пароль
    if (compairPassword.code === "errorPassword") {
      setDataError((pr) => {
        return { ...pr, isError: true, textError: "errorPassword" };
      });
    }
  }, [compairPassword]);

  //сохранение вводимых данных о User
  const changeHandler = (placeholder, value) => {
    setValueForm((prevSt) => {
      return { ...prevSt, [placeholder]: value };
    });
  };
  // запрос на сравнение обычного пароля введенного и записанного в "БД" либо авторизация
  const onPressBtn = (idetificateBtn) => {
    if (idetificateBtn === "Войти") {
      storeDataObjGet(valueForm, setCompairPassword);
    } else {
      setGetCodeVerif((pr) => {
        return { ...pr, readyGetCode: true, inputAuthData: valueForm };
      });
    }
  };
  return (
    <View style={styles.conteiner_form}>
      <View style={styles.form}>
        {includeForm.map((item, index) => {
          return (
            <TextInputItem
              key={item}
              index={index}
              valueForm={valueForm}
              placeholder={item}
              inputMode={inputMode}
              txtErr={dataError.textError}
              isError={dataError.isError}
              onChangeHandler={changeHandler}
              onResetIsError={() => {
                setDataError({ isError: false, textError: "" });
              }}
            />
          );
        })}
      </View>
      <View style={styles.auth_Btn}>
        <Btn
          btnText={btnText}
          textUnderBtn={textUnderBtn}
          onPressHandler={onPressBtn}
          valueForm={valueForm}
        />
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
