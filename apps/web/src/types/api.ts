export interface ApiResponse<T> extends Error {
  response: {
    data: T;
    message: string;
  }
}