export interface AuthRequest {
  name: string
  email: string
  password: string
  avatar: string
}

export interface AuthResponse {
  id: number
  email: string
  password: string
  name: string
  avatar: string
  role: 'admin' | 'customer'
}
