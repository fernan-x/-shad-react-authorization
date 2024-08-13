export type POLICIES_CALLBACK<T> = (args: T) => boolean;
export type POLICIES<T> = Record<string, POLICIES_CALLBACK<T>>;