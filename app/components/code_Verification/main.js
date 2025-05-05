import Module_inputCode from "./module_inputCode";
import Module_repeat_sending_code from "./module_repeat_sending_code";
import Module_btnTitle from "./module_btnTitle";
import Module_Image_Process_load from "./module_Image_Process_load";
import { useEffect, useState } from "react";
import ModuleSuccessCode from "./moduleSuccessCode";

export default function Main({
  inputDataAuth,
  onCodeAuth,
  codeSuccessHandler,
}) {
  // console.log("codeSuccessHandler: ", codeSuccessHandler);
  const [code, setIscode] = useState({
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
    // console.log("useEffect");
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
        OnCodeVerifUserInput={coderef}
      />
      <Module_repeat_sending_code />
      {code.isShowLoadView && <Module_Image_Process_load />}
      <ModuleSuccessCode codeSuccessHandler={codeSuccessHandler} />
    </>
  );
}
