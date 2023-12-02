import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: `${process.env.BASE_URL}`
});

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const connection = await pool.connect();
    const selectMembers = `SELECT m.id, m.name, m.email, m.year FROM "Members" as m ORDER BY m.id ASC`;
    const result = await connection.query(selectMembers);
    connection.release();
    if (result.rows.length > 0) {
      return new Response(JSON.stringify(result.rows), { status: 200 });
    } else {
      return new Response(JSON.stringify([]), { status: 200 });
    }
  } catch (err) {
    return new Response(`Error while fetching members`, { status: 500 });
  }
};
