import postgres from 'postgres';

// 防止开发模式热重载重复连接
const globalForSql = global as unknown as { sql: ReturnType<typeof postgres> };

export const sql =
  globalForSql.sql ||
  postgres(process.env.POSTGRES_URL!, {
    ssl: 'require', 
  });

if (process.env.NODE_ENV !== 'production') globalForSql.sql = sql;
