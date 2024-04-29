import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { User } from "../../Domain/entities/User";
import { Category } from "../../Domain/entities/Category";
import { HomeScreen } from "../../../src/Components/Views/home/Home";
import { RegisterScreen } from "../../../src/Components/Views/register/Register";
import { ProfileInfoScreen } from "../../../src/Components/Views/profile/info/ProfileInfo";
import { RolesScreen } from "../../../src/Components/Views/roles/Roles";
import { AdminTabsNavigator } from "../../../src/Presentation/navigator/AdminTabsNavigator";
import { ClientTabsNavigator } from "../../../src/Presentation/navigator/ClientTabsNavigator";
import { ProfileUpdateScreen } from "../../../src/Components/Views/profile/update/ProfileUpdate";
import { UserProvider } from "../../../src/Presentation/context/UserContext";
import { AdminCategoryCreateScreen } from "../../../src/Components/Views/admin/category/create/CategoryCreate";
import { AdminCategoryUpdateScreen } from "../../../src/Components/Views/admin/category/update/CategoryUpdate";


export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  RolesScreen: undefined;
  AdminTabsNavigator: undefined;
  ClientTabsNavigator: undefined;
  ProfileUpdateScreen: { user: User };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const UserState = ({ children }: any) => {
    return <UserProvider>{children}</UserProvider>;
  };

export const MainStackNavigator = () => {
  return (
    <UserState>
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

        <Stack.Screen
          name="RolesScreen"
          component={RolesScreen}
          options={{ headerShown: true, title: "Selecciona un Rol" }}
        />

        <Stack.Screen
          name="AdminTabsNavigator"
          component={AdminTabsNavigator}
        />

        <Stack.Screen
          name="ClientTabsNavigator"
          component={ClientTabsNavigator}
        />

        <Stack.Screen
          name="ProfileUpdateScreen"
          component={ProfileUpdateScreen}
          options={{ headerShown: true, title: "Actualizar Usuario" }}
        />

      </Stack.Navigator>
    </UserState>
  );
};


