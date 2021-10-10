import React from "react";
import { Text, TextInput, View } from "react-native";
import { COLORS, FONTS, SIZES } from "../constants";

export default function FormInput({
  containerStyle,
  label,
  placeholder,
  inputStyle,
  inputContainerStyle,
  prependComponent,
  appendComponent,
  secureTextEntry,
  keyboardType = "default",
  autoCompleteType = "off",
  autoCapitalize = "none",
  errorMsg = "",
  ...props
}) {
  return (
    <View style={containerStyle}>
      {/* Label & Error msg */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{label}</Text>
        <Text style={{ color: COLORS.red, ...FONTS.body4 }}>{errorMsg}</Text>
      </View>

      {/* Text input */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          height: SIZES.height > 800 ? 55 : 45,
          marginTop: SIZES.height > 800 ? SIZES.base: 0,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.lightGray2,
          ...inputContainerStyle
        }}
      >
        {prependComponent}
        <TextInput
          style={[
            {
              flex: 1,
              ...inputStyle,
            },
          ]}
          placeholder={placeholder}
          placeholderTextColor={COLORS.gray}
          secureTextEntry={secureTextEntry}
          keyboardType={keyboardType}
          autoCompleteType={autoCompleteType}
          autoCapitalize={autoCapitalize}
          {...props}
        />
        {appendComponent}
      </View>
    </View>
  );
}
