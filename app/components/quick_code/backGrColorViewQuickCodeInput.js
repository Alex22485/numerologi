import { BgColor } from "../../../components/tokens";

export default function backGrColor(quickCode, key) {
  return quickCode.errorCode
    ? BgColor.bg_error
    : quickCode.cointFirst === 0
    ? BgColor.bg_pink
    : quickCode.qCodeSecond.length >= key
    ? BgColor.bg_dark_pink
    : quickCode.qCodeFirst.length >= key && quickCode.qCodeSecond.length === 0
    ? BgColor.bg_dark_pink
    : BgColor.bg_pink;
}
