import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "./src/Components/Views/home/Home";
import { RegisterScreen } from "./src/Components/Views/register/Register";
import { ProfileInfoScreen } from "./src/Components/Views/profile/info/ProfileInfo";
import { RolesScreen } from "./src/Components/Views/roles/Roles";
import { AdminTabsNavigator } from "./src/Presentation/navigator/AdminTabsNavigator";
import { ClientTabsNavigator } from "./src/Presentation/navigator/ClientTabsNavigator";
import { ProfileUpdateScreen } from "./src/Components/Views/profile/update/ProfileUpdate";
import { User } from "./src/Domain/entities/User";
import { UserProvider } from "./src/Presentation/context/UserContext";
import { AdminCategoryCreateScreen } from "./src/Components/Views/admin/category/create/CategoryCreate";
import { AdminCategoryUpdateScreen } from "./src/Components/Views/admin/category/update/CategoryUpdate";
import { Category } from "./src/Domain/entities/Category";

export type RootStackParamList = {
  HomeScreen: undefined;
  RegisterScreen: undefined;
  RolesScreen: undefined;
  AdminTabsNavigator: undefined;
  ClientTabsNavigator: undefined;
  ProfileUpdateScreen: { user: User };
  AdminCategoryCreateScreen: undefined;
  AdminCategoryUpdateScreen: {category: Category};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
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

          <Stack.Screen
            name="AdminCategoryCreateScreen"
            component={AdminCategoryCreateScreen}
            options={{ headerShown: true, title: "Nueva Categoría" }}
          />

            <Stack.Screen
            name="AdminCategoryUpdateScreen"
            component={AdminCategoryUpdateScreen}
            options={{ headerShown: true, title: "Editar Categoría" }}
          />
        </Stack.Navigator>
      </UserState>
    </NavigationContainer>
  );
};

const UserState = ({ children }: any) => {
  return <UserProvider>{children}</UserProvider>;
};

export default App;
