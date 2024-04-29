import React, { useContext, useState } from "react";
import { Category } from "../../../../../Domain/entities/Category";
import { CategoryContext } from "../../../../../Presentation/context/CategoryContext";

const AdminCategoryListViewModel = () => {
  const [responseMessage, setResponseMessage] = useState("");
  const { categories, getCategories, remove } = useContext(CategoryContext);

  const deleteCategory = async (idCategory: string) => {
    const result = await remove(idCategory);
    setResponseMessage(result.message);
  };

  return {
    categories,
    responseMessage,
    getCategories,
    deleteCategory,
  };
};

export default AdminCategoryListViewModel;
