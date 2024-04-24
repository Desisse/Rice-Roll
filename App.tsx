import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Components/Views/home/Home";
import { RegisterScreen } from "./src/Components/Views/register/Register";
import { ProfileInfoScreen } from "./src/Components/Views/profile/info/ProfileInfo";
import { RolesScreen } from "./src/Components/Views/roles/Roles";

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  ProfileInfoScreen: undefined;
  RolesScreen: undefined;
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

        <Stack.Screen
          name="RolesScreen"
          component={RolesScreen}
          options={{ headerShown: true, title: "Selecciona un Rol" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
