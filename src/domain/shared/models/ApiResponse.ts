export type APIResponse<T> = {
  records?: {
    id: string;
    createdTime: string;
    fields: T;
  }[];
};
