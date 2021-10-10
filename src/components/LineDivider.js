import React from "react";
import { View, Text } from "react-native";
import { COLORS } from "../constants";

export default function LineDivider({ lineStyle }) {
  return (
    <View
      style={{
        height: 2,
        width: "100%",
        backgroundColor: COLORS.lightGray2,
        ...lineStyle,
      }}
    ></View>
  );
}
