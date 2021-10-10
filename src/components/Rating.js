import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { SIZES, FONTS, COLORS, icons } from "../constants";
export default function Rating({
  rating,
  iconStyle,
  activeColor = COLORS.orange,
  inactiveColor = COLORS.lightOrange3,
}) {
  return (
    <View
      style={{
        flexDirection: "row",
      }}
    >
      <Image
        source={icons.star}
        style={{
          height: 15,
          width: 15,
          tintColor: rating >= 1 ? activeColor : inactiveColor,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          height: 15,
          width: 15,
          tintColor: rating >= 2 ? activeColor : inactiveColor,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          height: 15,
          width: 15,
          tintColor: rating >= 3 ? activeColor : inactiveColor,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          height: 15,
          width: 15,
          tintColor: rating >= 4 ? activeColor : inactiveColor,
          ...iconStyle,
        }}
      />
      <Image
        source={icons.star}
        style={{
          height: 15,
          width: 15,
          tintColor: rating >= 5 ? activeColor : inactiveColor,
          ...iconStyle,
        }}
      />
    </View>
  );
}
