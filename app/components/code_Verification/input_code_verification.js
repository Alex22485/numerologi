import { StyleSheet, View } from "react-native";
import { BgColor } from "../../../components/tokens";
import { useEffect, useState } from "react";
import Module_Alert_code_verif_ver2 from "./module_Alert_code_verif_ver2";
import Main from "./main";
import Module_Alert_code_verif_ver3 from "./module_Alert_code_verif_ver3";

const VERIFICATIONCODE = Math.floor(Math.random() * 100000);

export default function Input_code_verification({ inputDataAuth }) {
  const [startAnim, setStartAnim] = useState(false);

  return (
    <View style={styles.content}>
      <Module_Alert_code_verif_ver3 />
      <Main inputDataAuth={inputDataAuth} />
    </View>
  );
}
const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    backgroundColor: BgColor.bg_white,
  },
});
