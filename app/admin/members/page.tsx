"use client"
import React from 'react'
import { body } from '@components/Fonts'
import Icon from '@mdi/react'
import { mdiAccount, mdiAccountCheck } from '@mdi/js'
import { useState, useEffect, Fragment } from 'react';
import AdminMemberList from '@components/AdminMemberList'
import AdminMemberReq from '@components/AdminMemberReq'

type Member = {
  name: string;
  year: string;
  email: string;
}

const Members = () => {
    const [activeSelection, setActiveSelection] = useState(0);
    const [members, setMembers] = useState<Member[]>([]);

    useEffect(() => {
        const fetchMembers = async () => {
            const response = await fetch('/api/getMembers');
            const data = await response.json();
            setMembers(data);
        }

        fetchMembers();
    })
  return (
    <Fragment>
    <nav className={`flex flex-row items-center justify-center bg-shade-light z-10 w-full border-b-2 border-neutral-300 border-solid ${body.className}`}>
        <div className={`flex flex-row items-center gap-2 w-full justify-center py-2 ${activeSelection === 0 ? "bg-gradient-to-r from-primary-700 via-primary-500 to-primary-300" : "bg-white"}`} onClick={() => setActiveSelection(0)}>
            <Icon className="text-neutral-700 rounded-lg p-0.5" path={mdiAccount} size={1.05} />
            <h1>Members</h1>
        </div>
        <div className={`flex flex-row items-center gap-2 w-full justify-center py-2 ${activeSelection === 1 ? "bg-gradient-to-r from-primary-700 via-primary-500 to-primary-300" : "bg-white"}`} onClick={() => setActiveSelection(1)}>
            <Icon className="text-neutral-700 rounded-lg p-0.5" path={mdiAccountCheck} size={1.05} />
            <h1>Requests</h1>
        </div>
    </nav>
    {members.map((member, index) => (
      activeSelection === 0 ?
      <AdminMemberList key={index} name={member.name} year={member.year} /> :
      <AdminMemberReq key={index} name={member.name} email={member.email} />
    ))}
    </Fragment>
  )
}

export default Members