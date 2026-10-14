export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'dispatcher' | 'customer';
  }
  
  export interface AuthState {
    user: User | null;
    token: string | null;
    isAuthenticated: boolean;
    loading: boolean;
    error: string | null;
  }