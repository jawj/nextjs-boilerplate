'use server';

import { neon } from '@neondatabase/serverless';

export const executeServerFunction = async () => {
  const sql = neon(process.env.DATABASE_URL!);
  const [row] = await sql`SELECT now()`;
  return row;
}; 
