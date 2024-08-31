export interface ApiError<T> extends Error {
  response: {
    data: T;
    message: string;
  }
}