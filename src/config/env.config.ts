interface ServerConfig {
  coreApi: string;
  isDev: boolean;
  port: number;
}

export interface DatabaseConfig {
  host: string;
  port: number;
  name: string;
  user: string;
  password: string;
}

export interface Config {
  server: ServerConfig;
  db: DatabaseConfig;
}
export const EnvConfig = (): Config => {
  const { env } = process;
  return {
    server: {
      isDev: env.NODE_ENV !== 'production',
      port: parseInt(env.PORT, 10) || 3000,
      coreApi: `${env.HOST}:${env.PORT}/api`,
    },
    db: {
      host: env.DB_HOST,
      port: parseInt(env.MARIA_DB_PORT, 10) || 3306,
      name: env.MARIA_DB_NAME,
      user: env.MARIA_DB_USER,
      password: env.MARIA_DB_PASSWORD,
    },
  };
};
