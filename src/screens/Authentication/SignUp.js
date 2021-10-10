import React from "react";
import { View, Text, TouchableOpacity, Image, Platform } from "react-native";
import AuthLayout from "./AuthLayout";
import { FONTS, SIZES, COLORS, icons } from "../../constants";

import { FormInput, TextButton, TextIconButton } from "../../components";
import { utils } from "../../utils";
export default function SignUp({ navigation }) {
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPass, setShowPass] = React.useState(false);
  const [emailError, setEmailError] = React.useState("");
  const [displayNameError, setDisplayNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const isEnableSignUp = () => {
    return (
      displayName !== "" &&
      email !== "" &&
      password !== "" &&
      displayNameError === "" &&
      emailError === "" &&
      passwordError === ""
    );
  };

  return (
    <AuthLayout
      title="Getting Started"
      subtitle="Create an account to continue!"
      titleContainerStyle={{
        marginTop: SIZES.radius,
      }}
    >
      {/* Form Input And Sign UP */}

      <View
        style={{
          flex: 1,
          marginTop: SIZES.padding,
        }}
      >
        <FormInput
          label="Display name"
          onChangeText={(value) => {
            setDisplayName(value);
          }}
          errorMsg={displayNameError}
          inputStyle={{
            paddingHorizontal: SIZES.radius,
          }}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
                paddingRight: SIZES.radius,
              }}
            >
              <Image
                source={
                  displayName === "" ||
                  (displayName !== "" && displayNameError === "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    displayName === ""
                      ? COLORS.gray
                      : displayName !== "" && displayNameError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="Email"
          keyboardType="email-address"
          autoCompleteType="email"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          inputStyle={{
            paddingHorizontal: SIZES.radius,
          }}
          onChangeText={(value) => {
            utils.validateEmail(value, setEmailError);
            setEmail(value);
          }}
          errorMsg={emailError}
          appendComponent={
            <View
              style={{
                justifyContent: "center",
                paddingRight: SIZES.radius,
              }}
            >
              <Image
                source={
                  email === "" || (email !== "" && emailError === "")
                    ? icons.correct
                    : icons.cancel
                }
                style={{
                  height: 20,
                  width: 20,
                  tintColor:
                    email === ""
                      ? COLORS.gray
                      : email !== "" && emailError === ""
                      ? COLORS.green
                      : COLORS.red,
                }}
              />
            </View>
          }
        />

        <FormInput
          label="Password"
          secureTextEntry={!showPass}
          autoCompleteType="password"
          containerStyle={{
            marginTop: SIZES.radius,
          }}
          inputStyle={{
            paddingHorizontal: SIZES.radius,
          }}
          onChangeText={(value) => {
            utils.validatePassword(value, setPasswordError);
            setPassword(value);
          }}
          errorMsg={passwordError}
          appendComponent={
            <TouchableOpacity
              style={{
                width: 40,
                alignItems: "flex-end",
                justifyContent: "center",
                paddingRight: SIZES.radius,
              }}
              onPress={() => setShowPass(!showPass)}
            >
              <Image
                source={showPass ? icons.eye_close : icons.eye}
                style={{
                  height: 20,
                  width: 20,
                  tintColor: COLORS.gray,
                }}
              />
            </TouchableOpacity>
          }
        />

        {/* Sign Up & Sign In */}
        <TextButton
          label="Sign Up"
          label2=""
          disabled={isEnableSignUp() ? false : true}
          buttonContainerStyle={{
            height: 55,
            alignItems: "center",
            marginTop: SIZES.padding,
            borderRadius: SIZES.radius,
            backgroundColor: isEnableSignUp()
              ? COLORS.primary
              : COLORS.transparentPrimary,
          }}
          onPress={() => navigation.navigate("Otp")}
          // onPress={() => onEmailAndPasswordSignup(displayName, email, password)}
        />

        <View
          style={{
            flexDirection: "row",
            marginTop: SIZES.radius,
            justifyContent: "center",
          }}
        >
          <Text style={{ color: COLORS.darkGray, ...FONTS.body3 }}>
            Already have an account?{" "}
          </Text>
          <TextButton
            label="Sign In"
            buttonContainerStyle={{
              backgroundColor: null,
            }}
            labelStyle={{
              color: COLORS.primary,
              ...FONTS.h3,
            }}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>

      {/* Footer */}
      <View style={{ marginVertical: SIZES.padding }}>
        {/* Facebook */}
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.blue,
          }}
          icon={icons.fb}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: COLORS.white,
          }}
          label="Sign up with Facebook"
          labelStyle={{
            marginLeft: SIZES.radius,
            color: COLORS.white,
          }}
          // onPress={onFacebookLogin}
        />

        {/* Google */}
        <TextIconButton
          containerStyle={{
            height: 50,
            alignItems: "center",
            marginTop: SIZES.radius,
            borderRadius: SIZES.radius,
            backgroundColor: COLORS.lightGray2,
          }}
          icon={icons.google}
          iconPosition="LEFT"
          iconStyle={{
            tintColor: null,
          }}
          label="Sign up with Google"
          labelStyle={{
            marginLeft: SIZES.radius,
          }}
          // onPress={onGoogleLogin}
        />

        {Platform.OS === "ios" && (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={
              AppleAuthentication.AppleAuthenticationButtonType.SIGN_UP
            }
            buttonStyle={
              AppleAuthentication.AppleAuthenticationButtonStyle.BLACK
            }
            cornerRadius={SIZES.radius}
            style={{
              height: 50,
              alignItems: "center",
              marginTop: SIZES.radius,
            }}
            // onPress={onAppleLogin}
          />
        )}
      </View>
    </AuthLayout>
  );
}
