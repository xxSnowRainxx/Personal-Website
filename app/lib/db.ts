import postgres from 'postgres';

// 创建全局单例连接（防止开发模式下热重载多次连接）
const globalForSql = global as unknown as { sql: ReturnType<typeof postgres> };

export const sql =
  globalForSql.sql ||
  postgres(process.env.POSTGRES_URL!, {
    ssl: 'require', // Neon 必须用 SSL
  });

if (process.env.NODE_ENV !== 'production') globalForSql.sql = sql;
