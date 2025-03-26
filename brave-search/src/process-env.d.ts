declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    PORT: string | number;
    HOST: string;

    BRAVE_SEARCH_API_ENDPOINT: string; // The base URL for the Brave search API
    BRAVE_SEARCH_API_KEY: string; // The API key for the Brave search API
  }

}