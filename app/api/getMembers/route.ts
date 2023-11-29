import { NextApiRequest, NextApiResponse } from "next";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: `${process.env.BASE_URL}`,
});

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const client = await pool.connect();
    const selectMembers = `SELECT m.name, m.email, m.year FROM "Members" as m`;
    const result = await client.query(selectMembers);
    if (result.rows.length > 0) {
      return new Response(JSON.stringify(result.rows), { status: 200 });
    } else {
      const data: [] = [];
      return new Response(JSON.stringify(data), { status: 200 });
    }
  } catch (err) {
    return new Response(`${err}`, { status: 500 });
  }
};
