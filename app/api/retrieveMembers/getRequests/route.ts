import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: `${process.env.BASE_URL}`
});

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const connection = await pool.connect();
    const selectRequests = `
    SELECT s.id, s.name, s.email, s.year, s.approval FROM "Sign Ups" as s 
    WHERE s.approval = 'PENDING'
    ORDER BY s.id ASC
    `;
    const result = await connection.query(selectRequests);
    connection.release();
    if (result.rows.length > 0) {
      return new Response(JSON.stringify(result.rows), { status: 200 });
    } else {
      return new Response(JSON.stringify([]), { status: 200 });
    }
  } catch (err) {
    return new Response(`Error while fetching requests`, { status: 500 });
  }
};
