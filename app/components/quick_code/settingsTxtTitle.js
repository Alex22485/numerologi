import { Color } from "../../../components/tokens";

export default function settingsTxtTitle(quickCode, textContent) {
  const result = quickCode.errorCode
    ? [Color.error, "Ошибка, повторите снова "]
    : quickCode.qCodeFirst.length === 4
    ? [Color.green, "Подтвердите пароль"]
    : [Color.dark_purple, textContent];
  return result;
}
