declare const WebMetrix: {
  init(options: { tenant: string; tenantUid: string; debug?: boolean }): boolean;
  sessionId?: string;
};