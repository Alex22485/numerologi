import Module_inputCode from "./module_inputCode";
import Module_repeat_sending_code from "./module_repeat_sending_code";
import Module_btnTitle from "./module_btnTitle";
import Module_Image_Process_load from "./module_Image_Process_load";
import { useEffect, useState } from "react";
import ModuleSuccessCode from "./moduleSuccessCode";
import Module_inputCode_autoFocus from "./module_inputCode_autoFocus";

export default function Main({
  inputDataAuth,
  onCodeAuth,
  codeSuccessHandler,
  OnCodeSuccessHandler,
  onIsShowQuickCodeView,
}) {
  const [code, setIscode] = useState({
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    isShowLoadView: false,
  });

  // Получение введенного кода верификации
  const coderef = (inputCode, index) => {
    setIscode((pr) => {
      return {
        ...pr,
        [index]: inputCode,
      };
    });
  };

  useEffect(() => {
    // Скрыть imageLoading
    if (code.isShowLoadView) {
      const checkCode = setTimeout(() => {
        setIscode((pr) => {
          return { ...pr, isShowLoadView: false };
        });
        onCodeAuth(code);
      }, 4000);
      return () => {
        clearTimeout(checkCode);
      };
    }
    // Показать imageLoading
    if (code[1] && code[2] && code[3] && code[4] && code[5]) {
      setIscode(() => {
        return {
          code: code[1] + code[2] + code[3] + code[4] + code[5],
          isShowLoadView: true,
        };
      });
    }
  }, [code]);

  return (
    <>
      <Module_btnTitle />
      <Module_inputCode
        inputDataAuth={inputDataAuth}
        // OnCodeVerifUserInput={coderef}
        // codeSuccessHandler={codeSuccessHandler}
        // OnCodeSuccessHandler={OnCodeSuccessHandler}
        // codeHandler={code}
      />
      <Module_inputCode_autoFocus
        codeHandler={code}
        codeSuccessHandler={codeSuccessHandler}
        OnCodeSuccessHandler={OnCodeSuccessHandler}
        codeVerifUserInput={coderef}
      />
      <Module_repeat_sending_code codeSuccessHandler={codeSuccessHandler} />
      {code.isShowLoadView && <Module_Image_Process_load />}
      <ModuleSuccessCode
        codeSuccessHandler={codeSuccessHandler}
        onIsShowQuickCodeView={onIsShowQuickCodeView}
        inputDataAuth={inputDataAuth}
      />
    </>
  );
}
