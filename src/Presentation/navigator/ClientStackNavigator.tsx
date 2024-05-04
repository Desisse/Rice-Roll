import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ClientCategoryListScreen } from "../../Components/Views/client/category/list/CategoryList";
import { ClientProductListScreen } from "../../Components/Views/client/product/list/ProductList";
import { ClientProductDetailScreen } from "../../Components/Views/client/product/detail/ProductDetail";
import { Product } from "../../Domain/entities/Product";


export type ClientStackParamList = {
    ClientCategoryListScreen: undefined;
    ClientProductListScreen: {id_category: string};
    ClientProductDetailScreen: {product: Product};

}

const Stack = createNativeStackNavigator<ClientStackParamList>();

export const ClientStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name= 'ClientCategoryListScreen'
            component={ ClientCategoryListScreen}
            options={{
                headerShown: true,
                title: 'Categorias'
            }}
            />
            <Stack.Screen 
            name= 'ClientProductListScreen'
            component={ ClientProductListScreen}
            options={{
                headerShown: true,
                title: 'Productos'
            }}
            />

            <Stack.Screen 
            name= 'ClientProductDetailScreen'
            component={ ClientProductDetailScreen}
            />

        </Stack.Navigator>
    )
}