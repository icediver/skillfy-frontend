import type { IUser } from "@/types/auth.interface";

export interface IAuthResponse {
  accessToken: string;
  user: IUser;
}

export interface IFormData {
  name?: string;
  email: string;
  password: string;
}
