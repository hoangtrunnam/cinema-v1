export interface ApiResponse<T> extends IResponseApi<T> {
  [x: string]: any;
  cancel?: boolean;
  code: number;
}

export interface IResponseApi<T> {
  success?: boolean;
  data?: T;
  message?: string;
  statusCode?: number;
  status?: number | string;
  page?: {
    current: number;
    max: number;
  };
  count?: number;
}
