import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { User, AuthState } from '@/types';
import { storage } from '@/utils/storage';

const storedSession = storage.get<{ user: User; token: string }>('fb_auth_session');

const initialState: AuthState = {
  user: storedSession?.user ?? null,
  token: storedSession?.token ?? null,
  isAuthenticated: Boolean(storedSession?.token),
  loading: false,
  error: null,
};

export const loginUser = createAsyncThunk(
  'auth/login',
  async (credentials: { email: string; password: string }, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (credentials.password.length < 6) {
        return rejectWithValue('Password must be at least 6 characters.');
      }
      const dummyUser: User = {
        id: 'usr-1',
        name: credentials.email.split('@')[0],
        email: credentials.email,
        role: 'dispatcher',
      };
      const session = { user: dummyUser, token: 'fb_session_token_xyz' };
      storage.set('fb_auth_session', session);
      return session;
    } catch (err: unknown) {
      return rejectWithValue(err instanceof Error ? err.message : 'Login failed');
    }
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (payload: { name: string; email: string; password: string }, { rejectWithValue }) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const dummyUser: User = {
        id: `usr-${Date.now()}`,
        name: payload.name,
        email: payload.email,
        role: 'customer',
      };
      const session = { user: dummyUser, token: 'fb_session_token_abc' };
      storage.set('fb_auth_session', session);
      return session;
    } catch (err: unknown) {
      return rejectWithValue(err instanceof Error ? err.message : 'Registration failed');
    }
  }
);

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
      storage.remove('fb_auth_session');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<{ user: User; token: string }>) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;