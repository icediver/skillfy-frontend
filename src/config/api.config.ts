export const API_URL = `${process.env.SERVER_URL}/api`;

export const getAuthUrl = (string: string) => `/auth${string}`;
export const getUsersUrl = (string: string) => `/users${string}`;
export const getVideosUrl = (string: string) => `/videos${string}`;
export const getCategoriesUrl = (string: string) => `/categories${string}`;
export const getCoursesUrl = (string: string) => `/courses${string}`;
export const getReviewsUrl = (string: string) => `/reviews${string}`;
