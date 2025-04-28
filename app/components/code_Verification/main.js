import Module_inputCode from "./module_inputCode";
import Module_repeat_sending_code from "./module_repeat_sending_code";
import Module_btnTitle from "./module_btnTitle";
import Module_Image_Process_load from "./module_Image_Process_load";
import { useEffect, useState } from "react";

export default function Main({ inputDataAuth }) {
  const [code, setIscode] = useState({
    isShowLoad: false,
    closeLoad: false,
    opacity: false,
  });

  const [startAnim, setStartAnim] = useState(false);
  console.log("startAnim: ", startAnim);

  const coderef = (inputCode, index) => {
    setIscode((pr) => {
      return {
        ...pr,
        isShowAlertCode: false,
        translateY: 10,
        opacity: index === 2 ? true : false,
        [index]: inputCode,
      };
    });
  };
  useEffect(() => {
    setTimeout(() => {
      // console.log("showAnim");
      setStartAnim(true);
    }, 5000);
    setTimeout(() => {
      // console.log("closeAnim");
      setStartAnim(5);
    }, 25000);
  }, []);
  useEffect(() => {
    // Скрыть imageLoading
    if (code.isShowLoad) {
      const checkCode = setTimeout(() => {
        setIscode((pr) => {
          return { ...pr, isShowLoad: false, closeLoad: true };
        });
      }, 4000);

      return () => {
        clearTimeout(checkCode);
      };
    }
    // показать imageLoading
    if (code[5] && !code.closeLoad) {
      setIscode((pr) => {
        return { ...pr, isShowLoad: true };
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
      {code.isShowLoad && <Module_Image_Process_load />}
    </>
  );
}
