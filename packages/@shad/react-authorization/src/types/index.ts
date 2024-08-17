export type POLICIES_CALLBACK<ARGS> = (args: ARGS) => boolean;
export type POLICIES<KEYS extends string,ARGS> = Record<KEYS, POLICIES_CALLBACK<ARGS>>;