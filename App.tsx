import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { CategoryProvider } from "./src/Presentation/context/CategoryContext";
import { MainStackNavigator } from "./src/Presentation/navigator/MainStackNavigator";

const App = () => {
  return (
    <NavigationContainer>
      <MainStackNavigator/>
    </NavigationContainer>
  );
};


export default App;
