import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";

import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import { images, FONTS, SIZES, COLORS } from "../../constants";

export default function AuthLayout({
  title,
  subtitle,
  titleContainerStyle,
  children,
}) {
  return (
    <SafeAreaView
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        paddingTop: SIZES.padding,
      }}
    >
      <ScrollView>
        <KeyboardAwareScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{
            paddingHorizontal: SIZES.padding,
            flex: 1,
            paddingVertical: SIZES.padding,
          }}
        >
          {/* App Icon */}
          <View
            style={{
              alignItems: "center",
            }}
          >
            <Image
              source={images.logo_02}
              resizeMode="contain"
              style={{
                height: 100,
                width: 200,
              }}
            />
          </View>

          {/* Title & Subtitle */}
          <View
            style={[
              {
                marginTop: SIZES.padding,
                ...titleContainerStyle,
              },
            ]}
          >
            <Text
              style={{
                textAlign: "center",
                ...FONTS.h2,
              }}
            >
              {title}
            </Text>
            <Text
              style={{
                textAlign: "center",
                color: COLORS.darkGray,
                marginTop: SIZES.base,
                ...FONTS.body3,
              }}
            >
              {subtitle}
            </Text>
          </View>

          {/* Content / Children */}
          {children}
        </KeyboardAwareScrollView>
      </ScrollView>
    </SafeAreaView>
  );
}
