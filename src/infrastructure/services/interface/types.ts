export interface BaseResponse<T> {
    data: T;
    message?: string;
    status: boolean;
  }
  
  export type StatusType = 'idle' | 'loading' | 'success' | 'error';