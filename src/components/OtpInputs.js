import React from "react";
import { View, Text, TextInput } from "react-native";
import { SIZES, COLORS, FONTS } from "../constants";
export default function OtpInputs({ pinCount }) {
  const inputs = Array(pinCount).fill(0);
  const [otpTextInput, setOtpTextInput] = React.useState([]);
  const [otp, setOtp] = React.useState([]);
  function focusPrevious(key, index) {
    if (key === "Backspace" && index !== 0)
      otpTextInput[index - 1]._root.focus();
  }

  function focusNext(index, value) {
    if (index < otpTextInput.length - 1 && value) {
      otpTextInput[index + 1]._root.focus();
    }
    if (index === this.otpTextInput.length - 1) {
      otpTextInput[index]._root.blur();
    }
    const otp = otp;
    otp[index] = value;
    setOtp(otp);
    pinCount(otp.join(""));
  }

  React.useEffect(() => {
    otpTextInput[0];
  }, []);
  return (
    <View style={{ width: "100%", height: 50 }}>
      <View style={{ flexDirection: "row" }}>
        {inputs.map((item) => (
          <View style={{ marginHorizontal: 3 }}>
            <TextInput
              value={item}
              keyboardType="numeric"
              style={{
                textAlign: "center",
                alignItems: "center",
                justifyContent: "center",
                width: 65,
                height: 65,
                borderRadius: SIZES.radius,
                backgroundColor: COLORS.lightGray2,
                color: COLORS.black,
                ...FONTS.h3,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}
