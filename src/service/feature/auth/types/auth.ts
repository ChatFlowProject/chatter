export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  type: 'MEMBER' | 'ADMIN' | string;
  token: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  nickname: string;
}

export interface RegisterResponse {
  userId: string;
  email: string;
  nickname: string;
}
