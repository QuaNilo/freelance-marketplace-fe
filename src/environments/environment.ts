export const environment = {
  production: false,
  apiHost: process.env.REACT_APP_API_URL,
  apiEndpoint: (process.env.REACT_APP_API_URL ?? "") + (process.env.REACT_APP_API_SUFIX ?? ""),
  refreshTokenInterval: 1,
  version: '1.0',
};
