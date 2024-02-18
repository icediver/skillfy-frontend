import { axiosClassic, instance } from "@/api/api.interceptor";
import { CATEGORIES, TypeCategoryData } from "./category.types";
import { getCategoriesUrl } from "@/config/api.config";

export const CategoryService = {
  async getAll() {
    const { data } = await axiosClassic.get<TypeCategoryData[]>(
      getCategoriesUrl(``),
    );

    return data;
  },

  async getBySlug(slug: string) {
    const { data } = await axiosClassic.get<TypeCategoryData>(
      getCategoriesUrl(`/by-slug/${slug}`),
    );
    if (!data) return;
    return data;
  },

  async getById(id: string | number) {
    return instance.get<TypeCategoryData>(getCategoriesUrl(`/${id}`));
  },

  async create() {
    return instance.post<TypeCategoryData>(getCategoriesUrl(``));
  },

  async update(id: string | number, data: TypeCategoryData) {
    return instance.put<TypeCategoryData>(getCategoriesUrl(`/${id}`), data);
  },

  async delete(id: string | number) {
    return instance.delete<TypeCategoryData>(getCategoriesUrl(`/${id}`));
  },
};
