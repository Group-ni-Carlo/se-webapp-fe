"use client"
import React from 'react';
import Icon from '@mdi/react';
import { useState, useEffect } from 'react'
import { Fragment } from 'react';
import { mdiAccount, mdiDotsHorizontal } from '@mdi/js';
import { title, body } from './Fonts';



const AdminMemberList = (props: {name: string, year: string}) => {
    
    
  return (
    <div className="flex flex-row w-full gap-4 border-y border-solid border-primary-300 items-center mt-4 py-4 px-4">
                <div className="flex">
                    <Icon className="text-neutral-300 border border-shade-dark rounded-3xl py-0.5" path={mdiAccount} size={1.5} />
                </div>
                <div className="flex flex-col w-full gap-0">
                    <span className={`${body.className} text-md`}>
                        {props.name}
                    </span>
                    <span className={`${body.className} text-sm text-neutral-300`}>
                        {props.year}
                    </span>
                </div>
                <div className="flex flex-row justify-end">
                    <Icon className="text-shade-dark" path={mdiDotsHorizontal} size={1} />
                </div>
    </div>
  )
}

export default AdminMemberList