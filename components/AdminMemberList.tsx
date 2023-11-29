import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount, mdiDotsHorizontal } from '@mdi/js';
import { title, body } from './Fonts';

async function getMember() {
    const res = await fetch('/');
}

const AdminMemberList = () => {
    const data = {
        name: 'Anthony John Aparicio',
        year: '2nd Year',
        email: 'anthonyjohn.aparicio-22@cpu.edu.ph'
    };
    
  return (
    <div className="flex flex-row w-full gap-4 border-y border-solid border-orange300 items-center mt-4 py-4 px-4">
        <div className="flex">
            <Icon className="text-gray300 border border-black rounded-3xl py-0.5" path={mdiAccount} size={1.5} />
        </div>
        <div className="flex flex-col w-full gap-0">
            <span className={`${body.className} text-md`}>
                AJ
            </span>
            <span className={`${body.className} text-sm text-gray300`}>
                2nd
            </span>
        </div>
        <div className="flex flex-row justify-end">
        <Icon className="text-black" path={mdiDotsHorizontal} size={1} />
        </div>
    </div>
  )
}

export default AdminMemberList