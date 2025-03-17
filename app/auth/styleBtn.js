import { BtnDisable, BtnEnable } from "../../components/tokens";

export const styleBtn = (OnValueForm) => {
  const btnIsActiv = Object.values(OnValueForm)
    .map((i) => i.length)
    .every((el) => el > 0);

  const btnOpacity = btnIsActiv
    ? BtnEnable.bg_opacity_1
    : BtnDisable.bg_opacity_06;

  const btnTextColor = btnIsActiv
    ? BtnEnable.color_white
    : BtnDisable.color_gray;
  return [btnIsActiv, btnOpacity, btnTextColor];
};
