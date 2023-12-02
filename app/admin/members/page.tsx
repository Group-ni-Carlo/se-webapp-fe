'use client';
import React from 'react';
import { body } from '@components/Fonts';
import Icon from '@mdi/react';
import { mdiAccount, mdiAccountCheck } from '@mdi/js';
import { useState, useEffect, Fragment } from 'react';
import AdminMemberList from '@components/AdminMemberList';
import AdminMemberReq from '@components/AdminMemberReq';

type Member = {
  id: number;
  name: string;
  year: string;
  email: string;
};

const deleteMember = async (index: number): Promise<void> => {
  const data: { id: number } = {
    id: index
  };
  const response = await fetch('/api/deleteMember', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

const approveMember = async (
  name: string,
  email: string,
  year: string
): Promise<void> => {
  const data: { name: string; email: string; year: string } = {
    name: name,
    email: email,
    year: year
  };
  console.log(data);
  const response = await fetch('/api/answerRequests', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

const rejectMember = async (index: number): Promise<void> => {
  const data: { id: number } = {
    id: index
  };
  console.log(data);
  const response = await fetch('/api/answerRequests', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
};

const Members = () => {
  const [activeSelection, setActiveSelection] = useState(0);
  const [members, setMembers] = useState<Member[]>([]);
  const [requests, setRequests] = useState<Member[]>([]);

  const fetchMembers = async () => {
    const response = await fetch('/api/retrieveMembers/getMembers');
    const data = await response.json();
    setMembers(data);
  };

  const fetchRequests = async () => {
    const response = await fetch('/api/retrieveMembers/getRequests');
    const data = await response.json();
    setRequests(data);
  };

  useEffect(() => {
    fetchMembers();
    fetchRequests();
  }, []);

  const handleMemberList = async (index: number) => {
    await deleteMember(index);
    fetchMembers();
  };

  const handleApproval = async (name: string, email: string, year: string) => {
    await approveMember(name, email, year);
    fetchRequests();
  };

  const handleRejection = async (index: number) => {
    await rejectMember(index);
    fetchRequests();
  };

  return (
    <Fragment>
      <nav
        className={`flex flex-row items-center justify-center bg-shade-light z-10 w-full border-b-2 border-neutral-300 border-solid ${body.className}`}
      >
        <div
          className={`flex flex-row items-center gap-2 w-full justify-center py-2 ${
            activeSelection === 0
              ? 'bg-gradient-to-r from-primary-700 via-primary-500 to-primary-300'
              : 'bg-white'
          }`}
          onClick={() => setActiveSelection(0)}
        >
          <Icon
            className="text-neutral-700 rounded-lg p-0.5"
            path={mdiAccount}
            size={1.05}
          />
          <h1>Members</h1>
        </div>
        <div
          className={`flex flex-row items-center gap-2 w-full justify-center py-2 ${
            activeSelection === 1
              ? 'bg-gradient-to-r from-primary-700 via-primary-500 to-primary-300'
              : 'bg-white'
          }`}
          onClick={() => setActiveSelection(1)}
        >
          <Icon
            className="text-neutral-700 rounded-lg p-0.5"
            path={mdiAccountCheck}
            size={1.05}
          />
          <h1>Requests</h1>
        </div>
      </nav>
      {activeSelection === 0
        ? members.map((member, index) => (
            <AdminMemberList
              key={member.id}
              name={member.name}
              year={member.year}
              deleteMemberAccount={() => handleMemberList(member.id)}
            />
          ))
        : requests.map((request, index) => (
            <AdminMemberReq
              key={request.id}
              name={request.name}
              year={request.year}
              email={request.email}
              approveRequest={() =>
                handleApproval(request.name, request.email, request.year)
              }
              rejectRequest={() => handleRejection(request.id)}
            />
          ))}
    </Fragment>
  );
};

export default Members;
