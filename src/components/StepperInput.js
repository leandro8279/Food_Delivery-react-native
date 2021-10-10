import React from "react";
import { View, Text } from "react-native";
import { IconButton } from ".";
import { COLORS, FONTS, icons, SIZES } from "../constants";
export default function StepperInput({
  containerStyle,
  value = 1,
  onAdd,
  onMinus,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        width: 130,
        backgroundColor: COLORS.lightGray2,
        alignItems: "center",
        borderRadius: SIZES.radius,
        ...containerStyle,
      }}
    >
      <IconButton
        containerStyle={{
          width: 50,
          alignItems: "center",
          justiffyContent: "center",
        }}
        icon={icons.minus}
        iconStyle={{
          height: 25,
          width: 25,
          tintColor: value > 1 ? COLORS.primary : COLORS.gray,
        }}
        onPress={onMinus}
      />
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ ...FONTS.h3 }}>{value}</Text>
      </View>
      <IconButton
        containerStyle={{
          width: 50,
          alignItems: "center",
          justiffyContent: "center",
        }}
        icon={icons.plus}
        iconStyle={{
          height: 25,
          width: 25,
          tintColor: COLORS.primary,
        }}
        onPress={onAdd}
      />
    </View>
  );
}
