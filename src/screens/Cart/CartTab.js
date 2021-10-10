import React from "react";
import { View, Text } from "react-native";
import { HeaderApp } from "../../components";
const CartTab = () => {
  function Header() {
    return <HeaderApp />;
  }
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>CartTab Screen</Text>
    </View>
  );
};

export default CartTab;
