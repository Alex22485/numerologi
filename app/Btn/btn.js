import { View } from "react-native";
import BtnPart1 from "./btnPart1";
import BnPart2 from "./btnPart2";

export default function Btn({
  btnText,
  textUnderBtn,
  onPressHandler,
  valueForm,
}) {
  return (
    <View>
      <BtnPart1
        valueForm={valueForm}
        btnText={btnText}
        onPressHandler={() => {
          onPressHandler(btnText);
        }}
      />
      <BnPart2 textUnderBtn={textUnderBtn} />
    </View>
  );
}
