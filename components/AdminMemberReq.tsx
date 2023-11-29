import React from 'react';
import Icon from '@mdi/react';
import { mdiAccount, mdiCheck, mdiClose } from '@mdi/js';
import { title, body } from './Fonts';

const AdminMemberReq = () => {
  return (
    <div className="flex flex-row w-full gap-4 border-y border-solid border-orange300 items-center mt-4 py-4 px-4">
        <div className="flex">
            <Icon className="text-gray300 border border-black rounded-3xl py-0.5" path={mdiAccount} size={1.5} />
        </div>
        <div className="flex flex-col w-full gap-0">
            <span className={`${body.className} text-md`}>
                Anthony John Aparicio
            </span>
            <span className={`${body.className} text-sm text-gray300`}>
                anthonyjohn.aparicio-22@cpu.edu.ph
            </span>
        </div>
        <div className="flex flex-row justify-end gap-4">
            <Icon className="text-success" path={mdiCheck} size={1} />
            <Icon className="text-error" path={mdiClose} size={1} />
        </div>
    </div>
  )
}

export default AdminMemberReq