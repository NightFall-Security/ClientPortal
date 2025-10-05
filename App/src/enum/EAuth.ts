export const EAuthType = {
    DISCONNECTED:1,
    AUTHENTICATED:2,
    ERR:3
} as const;

export type EAuthType = typeof EAuthType[keyof typeof EAuthType];
