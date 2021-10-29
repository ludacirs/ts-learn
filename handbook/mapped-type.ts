const MOBILE_OS = {
    IOS: 'iOS',
    Android: 'Android'
} as const;

type MOBILE_OS = typeof MOBILE_OS[keyof typeof MOBILE_OS]; // 'iOS' | 'Android'
