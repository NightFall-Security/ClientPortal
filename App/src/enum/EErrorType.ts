export const EErrorType = {
  SUCCESS: 1,
  NOTFOUND: 2,
  UNAUTHORIZED: 3,
  FORBIDDEN: 4,
  BAD: 5,
  CONFLICT: 6,
  OUTAUTHORIZED: 7,
  TIMEOUT: 8
} as const;

export type EErrorType = typeof EErrorType[keyof typeof EErrorType];
