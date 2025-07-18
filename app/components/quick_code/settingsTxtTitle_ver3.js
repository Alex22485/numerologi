import { Color } from "../../../components/tokens";

export default function settingsTxtTitle_ver3(quickCode, textContent) {
  console.log("textContent: ", textContent);
  const result = quickCode.errorCode
    ? [Color.error, "Ошибка, повторите снова "]
    : textContent
    ? [Color.dark_purple, "Введите код"]
    : quickCode.qCodeFirst.length === 4
    ? [Color.green, "Подтвердите пароль"]
    : [Color.dark_purple, "Придумайте пароль быстрого входа"];
  return result;
}
