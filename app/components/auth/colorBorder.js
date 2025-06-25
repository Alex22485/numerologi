import { Color } from "../../../components/tokens";

const colorBorder = (valueForm, placeholder, setBorder, onFocus = false) => {
  // Темная рамка у активного TextInput
  if (onFocus) {
    return setBorder({
      isTextMistakes: false,
      color: Color.dark_purple,
      width: 2,
    });
    // Красная рамка/или нет у пустого TextInput
  } else {
    if (valueForm[placeholder].length === 0) {
      return setBorder((pr) => {
        return {
          ...pr,
          isTextMistakes: true,
          color: Color.red,
          width: 2,
        };
      });
      // !проверить нужне ли этот пункт
    } else {
      setBorder({
        isTextMistakes: false,
        color: Color.dark_purple,
        width: 0,
      });
    }
  }
};

export default colorBorder;
