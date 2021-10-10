import React from "react";
import { View, Text } from "react-native";
import OTPInputView from "@twotalltotems/react-native-otp-input";

import AuthLayout from "./AuthLayout";
import { FONTS, SIZES, COLORS } from "../../constants";

import { TextButton, OtpInputs } from "../../components";

export default function Otp({ navigation }) {
  const [timer, setTimer] = React.useState(60);

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer > 0) {
          return prevTimer - 1;
        } else {
          return prevTimer;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <AuthLayout
      title="OTP Authentication"
      subtitle="An authentication code has been sent to byprogrammers@gmail.com"
      titleContainerStyle={{
        marginTop: SIZES.padding * 2,
      }}
    >
      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding * 2,
        }}
      >
        <OtpInputs pinCount={4} />
        {/* Countdown Timer +*/}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: SIZES.padding,
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Didn't receive code?
          </Text>
          <TextButton
            label={`Resend (${timer}s)`}
            disabled={timer === 0 ? false : true}
            buttonContainerStyle={{
              marginLeft: SIZES.base,
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => setTimer(60)}
          />
        </View>
      </View>

      {/* Footer */}
      <View>
        <TextButton
          label="Continue"
          buttonContainerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.primary,
            marginTop: SIZES.base,
          }}
          onPress={() => navigation.navigate("Home")}
        />
        <View
          style={{
            marginTop: SIZES.padding,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: COLORS.darkGray,
              ...FONTS.body3,
            }}
          >
            By signing up, you agree to our.
          </Text>
          <TextButton
            label="Terms and Conditions"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.body3,
            }}
            onPress={() => console.log("TnC")}
          />
        </View>
      </View>
    </AuthLayout>
  );
}
