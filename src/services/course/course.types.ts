export const COURSES = "courses";

export type TypeCourseData = {
  name: string;
  price: number;
  description?: string;
  images: string[];
  lessons: string[];
  categoryId: number;
};
export type TypeCoursesDataFilters = {
  sort?: EnumCourseSort | string;
  searchTerm?: string;
  page?: string | number;
  perPage: string | number;
  ratings: string;
  minPrice?: string;
  maxPrice?: string;
  categoryId?: string;
};

export enum EnumCourseSort {
  HIGH_PRICE = "high-price",
  LOW_PRICE = "low-price",
  NEWEST = "newest",
  OLDEST = "oldest",
}

export type TypeParamsFilters = {
  searchParams: TypeCoursesDataFilters;
};
