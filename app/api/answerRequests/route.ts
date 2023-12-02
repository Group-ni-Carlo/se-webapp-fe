import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: `${process.env.BASE_URL}`
});

export const POST = async (req: Request, res: NextApiResponse) => {
  try {
    const body = await req.json();
    const connection = await pool.connect();
    const approveRequest = /* sql */ `
      INSERT INTO "Members"(name, year, email)
        VALUES ($1, $2, $3)
      `;
    const result = await connection.query(approveRequest, [
      body.name,
      body.year,
      body.email
    ]);
    connection.release();
    return new Response('Request approved!', { status: 200 });
  } catch (err) {
    return new Response(`Error while approving request`, { status: 500 });
  }
};

export const DELETE = async (req: Request, res: NextApiResponse) => {
  try {
    const body = await req.json();
    const connection = await pool.connect();
    const deleteRequest = /* sql */ `
    DELETE FROM "Sign Ups" as s
    WHERE s.id = $1
    `;
    const result = await connection.query(deleteRequest, [body.id]);
    connection.release();
    return new Response('Request deleted!', { status: 200 });
  } catch (err) {
    return new Response(`Error while deleting request`, { status: 500 });
  }
};
