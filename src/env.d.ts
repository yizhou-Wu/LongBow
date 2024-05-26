// src/env.d.ts
interface ProcessEnv {
    readonly REACT_APP_IMAGE_PATH?: string;
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
  
  interface Process {
    env: ProcessEnv;
  }
  
  declare var process: Process;
  