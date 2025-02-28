import { Text, View } from "react-native";

export default function ItemComponent({
  alignItems = "strech",
  justifyContent = "center",
  width = true,
  height = "",
  isText = false,
}) {
  console.log("alignItems: ", alignItems);
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
