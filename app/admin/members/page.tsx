"use client"
import React from 'react'
import { body } from '@components/Fonts'
import Icon from '@mdi/react'
import { mdiAccount, mdiAccountCheck } from '@mdi/js'
import { useState, useEffect, Fragment } from 'react';
import AdminMemberList from '@components/AdminMemberList'
import AdminMemberReq from '@components/AdminMemberReq'

const Members = () => {
    const [activeSelection, setActiveSelection] = useState(0);
    
  return (
    <Fragment>
    <nav className={`flex flex-row items-center justify-center bg-white z-10 w-full border-b-2 border-gray300 border-solid ${body.className}`}>
        <div className={`flex flex-row items-center gap-2 w-full justify-center py-2 ${activeSelection === 0 ? "bg-gradient-to-r from-orange700 via-orange500 to-orange300" : "bg-white"}`} onClick={() => setActiveSelection(0)}>
            <Icon className="text-gray700 rounded-lg p-0.5" path={mdiAccount} size={1.05} />
            <h1>Members</h1>
        </div>
        <div className={`flex flex-row items-center gap-2 w-full justify-center py-2 ${activeSelection === 1 ? "bg-gradient-to-r from-orange700 via-orange500 to-orange300" : "bg-white"}`} onClick={() => setActiveSelection(1)}>
            <Icon className="text-gray700 rounded-lg p-0.5" path={mdiAccountCheck} size={1.05} />
            <h1>Requests</h1>
        </div>
    </nav>
    {activeSelection === 0 ?
    <AdminMemberList></AdminMemberList> :
    <AdminMemberReq></AdminMemberReq>}
    </Fragment>
  )
}

export default Members