import { iUser } from "./user";

export interface AuthResponse {
  accessToken: string;
  user: iUser;
}

