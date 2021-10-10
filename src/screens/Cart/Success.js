import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image, BackHandler } from "react-native";
import {
  CartQuantityButton,
  FooterTotal,
  HeaderApp,
  IconButton,
  StepperInput,
  TextButton,
} from "../../components";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";

const Success = ({ navigation }) => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingHorizontal: SIZES.padding,
      }}
    >
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Image
          source={images.success}
          style={{
            width: 150,
            height: 150,
          }}
        />
        <Text
          style={{
            marginTop: SIZES.padding,
            ...FONTS.h1,
          }}
        >
          Congratulations
        </Text>
        <Text
          style={{
            marginTop: SIZES.base,
            textAlign: "center",
            color: COLORS.darkGray,
            ...FONTS.body3,
          }}
        >
          Payment was successfull made!
        </Text>
      </View>
      <TextButton
        label="Done"
        buttonContainerStyle={{
          height: 55,
          marginBottom: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        onPress={() => navigation.navigate("DeliveryStatus")}
      />
    </View>
  );
};

export default Success;
