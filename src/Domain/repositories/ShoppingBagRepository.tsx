import { Product } from "../entities/Product";

export interface ShoppingBagRepository {

    save(product: Product[]): Promise<void>;
    getShoppingBag(): Promise<Product[]>;
}