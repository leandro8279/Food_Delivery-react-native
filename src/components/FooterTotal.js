import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { View, Text, Platform } from "react-native";
import { LineDivider, TextButton } from ".";
import { FONTS, SIZES, COLORS } from "../constants";

export default function FooterTotal({ subTotal, shippingFee, total, onPress }) {
  return (
    <View>
      {/* Shadow */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        colors={[COLORS.transparent, COLORS.lightGray1]}
        style={{
          position: "absolute",
          top: -15,
          left: 0,
          right: 0,
          height: Platform.OS === "ios" ? 200 : 50,
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        }}
      />
      {/* Order Details */}
      <View
        style={{
          padding: SIZES.padding,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: COLORS.white,
        }}
      >
        {/* SubTotal  */}
        <View style={{ flexDirection: "row" }}>
          <Text style={{ flex: 1, ...FONTS.body3 }}>SubTotal</Text>
          <Text style={{ ...FONTS.h3 }}>R$ {total.toFixed(2)}</Text>
        </View>
        {/* Shipping Fee */}
        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.base,
            marginBottom: SIZES.base,
          }}
        >
          <Text style={{ flex: 1, ...FONTS.body3 }}>Shipping Fee</Text>
          <Text style={{ ...FONTS.h3 }}>R$ {shippingFee.toFixed(2)}</Text>
        </View>
        {/* Line */}
        <LineDivider />
        {/* Total  */}
        <View style={{ flexDirection: "row", marginTop: SIZES.base }}>
          <Text style={{ flex: 1, ...FONTS.h2 }}>Total:</Text>
          <Text style={{ ...FONTS.h2 }}>R$ {total}</Text>
        </View>
        {/* Buttom */}
        <TextButton
          buttonContainerStyle={{
            height: 50,
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
          }}
          label="Place your Order"
          label2=""
          onPress={onPress}
        />
      </View>
    </View>
  );
}
