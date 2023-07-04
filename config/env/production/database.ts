// path: ./config/env/production/database.ts
//

import { parse } from 'pg-connection-string';
parse(process.env.DATABASE_URL);

export default ({ env }) => ({
  connection: {
    connectionString: env('DATABASE_URL'),
    host: env('DATABASE_HOST', 'localhost'),
    port: env.int('DATABASE_PORT', 5432),
    database: env('DATABASE_NAME', 'strapi'),
    user: env('DATABASE_USERNAME', 'strapi'),
    password: env('DATABASE_PASSWORD', 'strapi'),
    ssl: env.bool('DATABASE_SSL', false) && {
      key: env('DATABASE_SSL_KEY', undefined),
      cert: env('DATABASE_SSL_CERT', undefined),
      ca: env('DATABASE_SSL_CA', undefined),
      capath: env('DATABASE_SSL_CAPATH', undefined),
      cipher: env('DATABASE_SSL_CIPHER', undefined),
      rejectUnauthorized: env.bool('DATABASE_SSL_REJECT_UNAUTHORIZED', true),
    },
    schema: env('DATABASE_SCHEMA', 'public'),
  },
  pool: {
    /*
        pra eu conseguir ter acesso ao postgres tenho que setar las nas env DATABASE_POOL_MIN para 0 e DATABASE_POOL_MAX para 5
        por causa de limitações do plano postgresSQL FREE
      */
    min: env.int('DATABASE_POOL_MIN', 0),
    max: env.int('DATABASE_POOL_MAX', 2),
  },
});
