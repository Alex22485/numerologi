import { Text, View } from "react-native";

export default function ItemComponent({
  flexDirection = "column",
  alignItems = "strech",
  justifyContent = "flex-start",
  width = true,
  height = "",
  isText = false,
}) {
  const styleOnerow = width
    ? { backgroundColor: "tomato", width: 15, height: 15 }
    : { backgroundColor: "tomato", height: 15 };
  const firstItem = isText ? (
    <View style={styleOnerow}>
      <Text>proba</Text>
    </View>
  ) : (
    <View style={styleOnerow} />
  );
  return (
    <>
      <View
        style={{
          flexDirection: flexDirection,
          backgroundColor: "#F7E2F7",
          alignItems: alignItems,
          justifyContent: justifyContent,
          height: height,
        }}
      >
        {firstItem}
        <View style={{ backgroundColor: "purple", width: 15, height: 15 }} />
        <View style={{ backgroundColor: "green", width: 15, height: 15 }} />
      </View>
    </>
  );
}
