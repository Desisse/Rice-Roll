import { Category } from "../../Domain/entities/Category";
import * as ImagePicker from "expo-image-picker";
import { ResponseApiRice } from "../../Data/sources/remote/models/ResponseApiRice";
import { createContext, useEffect, useState } from "react";
import { GetAllCategoryUseCase } from "../../Domain/useCase/category/GetAllCategory";
import { CreateCategoryUseCase } from "../../Domain/useCase/category/CreateCategory";
import { UpdateCategoryUseCase } from "../../Domain/useCase/category/UpdateCategory";
import { UpdateWithImageCategoryUseCase } from "../../Domain/useCase/category/UpdateWithImageCategory";
import { DeleteCategoryUseCase } from "../../Domain/useCase/category/DeleteCategory";

export interface CategoryContextProps {
  categories: Category[];
  getCategories(): Promise<void>;
  create(
    category: Category,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApiRice>;
  update(category: Category): Promise<ResponseApiRice>;
  updateWithImage(
    category: Category,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApiRice>;
  remove(id: string): Promise<ResponseApiRice>;
}

export const CategoryContext = createContext({} as CategoryContextProps);

export const CategoryProvider = ({ children }: any) => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    if (categories.length === 0) {
      getCategories();
    }
  }, []);

  const getCategories = async (): Promise<void> => {
    const result = await GetAllCategoryUseCase();
    setCategories(result);
  };

  const create = async (
    category: Category,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApiRice> => {
    const response = await CreateCategoryUseCase(category, file!);
    getCategories();
    return response;
  };

  const update = async (category: Category): Promise<ResponseApiRice> => {
    const response = await UpdateCategoryUseCase(category);
    getCategories();
    return response;
  };

  const updateWithImage = async (
    category: Category,
    file: ImagePicker.ImagePickerAsset
  ): Promise<ResponseApiRice> => {
    const response = await UpdateWithImageCategoryUseCase(category, file);
    getCategories();
    return response;
  };

  const remove = async (id: string): Promise<ResponseApiRice> => {
    const response = await DeleteCategoryUseCase(id);
    getCategories();
    return response;
  };

  return (
    <CategoryContext.Provider
      value={{
        categories,
        getCategories,
        create,
        update,
        updateWithImage,
        remove,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};
