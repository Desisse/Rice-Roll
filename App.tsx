import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Components/Views/home/Home";
import { RegisterScreen } from "./src/Components/Views/register/Register";
import { ProfileInfoScreen } from "./src/Components/Views/profile/info/ProfileInfo";

export type RootStackParamList = {
  HomeScreen: undefined,
  RegisterScreen: undefined,
  ProfileInfoScreen: undefined
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
          options={{ headerShown: true, title: "Registro" }}
        />
        <Stack.Screen name="ProfileInfoScreen" component={ProfileInfoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
