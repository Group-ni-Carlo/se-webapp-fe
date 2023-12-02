import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: `${process.env.BASE_URL}`
});

export const DELETE = async (req: Request, res: NextApiResponse) => {
  try {
    const body = await req.json();
    const connection = await pool.connect();
    const deleteMembers = /* sql */ `
    DELETE FROM "Members" as m
    WHERE m.id = $1
    `;
    const result = await connection.query(deleteMembers, [body.id]);
    connection.release();
    return new Response('Member deleted!', { status: 200 });
  } catch (err) {
    return new Response(`Error while deleting member`, { status: 500 });
  }
};
