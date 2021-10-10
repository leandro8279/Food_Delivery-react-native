import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FONTS, SIZES, COLORS, icons } from "../constants";

export default function RadioButtom({
  containerStyle,
  label,
  labelStyle,
  iconStyle,
  isSelected,
  onPress,
}) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        ...containerStyle,
      }}
      onPress={onPress}
    >
      <Image
        source={isSelected ? icons.check_on : icons.check_off}
        style={{
          width: 20,
          height: 20,
          marginLeft: 5,
          ...iconStyle,
        }}
      />
      <Text
        style={{
          marginLeft: SIZES.radius,
          color: COLORS.gray,
          ...FONTS.body3,
          ...labelStyle,
        }}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
}
