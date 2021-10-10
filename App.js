import React from "react";
import AppNavigator from "./src/navigation/AppNavigator";

import { Provider } from "react-redux";
import store from "./src/redux/store";

import { useFonts } from "expo-font";
export default function App() {
  const [loaded] = useFonts({
    "Poppins-Black": require("./assets/fonts/Poppins-Black.ttf"),
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
