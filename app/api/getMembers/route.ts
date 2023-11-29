import { NextApiRequest, NextApiResponse } from "next";

export const GET = async (req: NextApiRequest, res: NextApiResponse) => {
    const data = 
    [{
        name: 'Anthony John Aparicio',
        year: '2nd Year',
        email: 'anthonyjohn.aparicio-22@cpu.edu.ph'
    },
    {
        name: 'Jezerwel Grino',
        year: '2nd Year',
        email: 'jezerwel.grino-22@cpu.edu.ph'
    },
    {
        name: 'Jed Matthew Mamosto',
        year: '2nd Year',
        email: 'jedmatthew.mamosto-20@cpu.edu.ph'
    },
    {
        name: 'John Carlo Macoco',
        year: '2nd Year',
        email: 'johncarlo.macoco-09@cpu.edu.ph'
    }
    ]
    
    try {
        return new Response(JSON.stringify(data), { status: 200 });
    }
    catch (err) {
        return new Response(`${err}`, { status: 500 });
    }
}
    