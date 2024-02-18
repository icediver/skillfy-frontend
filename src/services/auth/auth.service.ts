import { axiosClassic } from "@/api/api.interceptor";
import { removeFromStorage, saveTokenStorage } from "./auth.helper";
import { IAuthResponse, IFormData } from "./auth.types";
import { getAuthUrl } from "@/config/api.config";

export enum EnumTokens {
  "ACCESS_TOKEN" = "accessToken",
  "REFRESH_TOKEN" = "refreshToken",
}

export const authService = {
  async main(type: "login" | "register", data: IFormData) {
    const response = await axiosClassic.post<IAuthResponse>(
      getAuthUrl(`/${type}`),
      data,
    );

    if (response.data.accessToken) saveTokenStorage(response.data.accessToken);

    return response;
  },

  async getNewTokens() {
    const response = await axiosClassic.post<IAuthResponse>(
      getAuthUrl("/login/accesToken"),
    );
  },

  async logout() {
    const response = await axiosClassic.post<boolean>(getAuthUrl("/logout"));

    if (response.data) removeFromStorage();
  },
};
