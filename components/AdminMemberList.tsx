'use client';
import React from 'react';
import Icon from '@mdi/react';
import { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { mdiAccount, mdiDelete } from '@mdi/js';
import { title, body } from './Fonts';

const AdminMemberList = (props: {
  name: string;
  year: string;
  deleteMemberAccount: () => void;
}) => {
  return (
    <div className="flex flex-row w-full gap-4 border-y border-solid border-primary-300 items-center mt-4 py-4 px-4">
      <div className="flex">
        <Icon
          className="text-neutral-300 border border-shade-dark rounded-3xl py-0.5"
          path={mdiAccount}
          size={1.5}
        />
      </div>
      <div className="flex flex-col w-full gap-0">
        <span className={`${body.className} text-md`}>{props.name}</span>
        <span className={`${body.className} text-sm text-neutral-300`}>
          {props.year}
        </span>
      </div>
      <div className="flex flex-row gap-4 justify-end">
        <span>
          <Icon className="text-shade-dark" path={mdiAccount} size={1} />
        </span>
        <span onClick={props.deleteMemberAccount}>
          <Icon className="text-shade-dark" path={mdiDelete} size={1} />
        </span>
      </div>
    </div>
  );
};

export default AdminMemberList;
