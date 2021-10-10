import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import CustomDrawer from "./CustomDrawer";
import {
  OnBoarding,
  SignIn,
  SignUp,
  Otp,
  ForgotPassword,
  FoodDetail,
  Checkout,
  MyCart,
  Success,
  AddCard,
  MyCard,
  DeliveryStatus,
  Map,
} from "../screens";

export default function AppNavigator() {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={CustomDrawer} />
        <Screen name="OnBoarding" component={OnBoarding} />
        <Screen name="SignIn" component={SignIn} />
        <Screen name="SignUp" component={SignUp} />
        <Screen name="Otp" component={Otp} />
        <Screen name="ForgotPassword" component={ForgotPassword} />
        <Screen name="FoodDetail" component={FoodDetail} />

        <Screen name="Checkout" component={Checkout} />

        <Screen name="MyCart" component={MyCart} />

        <Screen
          name="Success"
          component={Success}
          options={{
            gestureEnabled: false,
          }}
        />

        <Screen name="AddCard" component={AddCard} />

        <Screen name="MyCard" component={MyCard} />

        <Screen
          name="DeliveryStatus"
          component={DeliveryStatus}
          options={{
            gestureEnabled: false,
          }}
        />

        <Screen name="Map" component={Map} />
      </Navigator>
    </NavigationContainer>
  );
}
