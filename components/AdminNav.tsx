"use client"
import React from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiMenu, mdiBullhorn, mdiTshirtCrew, mdiHandshake, mdiKeyboardBackspace, mdiAccount } from '@mdi/js';
import { title, body } from '@components/Fonts';

const AdminNavBar: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Fragment>
    <section className="w-full flex items-center px-2.5 shadow-md flex-center flex-row h-12 bg-white z-0 border-b-2 border-solid border-gray100">
        <div className="flex gap-2 flex-center z-0" onClick={() => setToggleMenu(!toggleMenu)}>
            <Icon className="bg-orange700 text-white rounded-lg p-0.5" path={mdiMenu} size={1.05} />
        </div>

        <div className="sm:flex hidden ml-2 pt-1 text-xl">
            <h1 className={`${title.className}`}>Software Engineering</h1>
        </div>
    </section>
    {toggleMenu && (
        <div className={`flex flex-col absolute h-full bg-white w-56 m-0 shadow-md top-0 gap-y-5 z-10 animate-slideInFromLeft ${body.className}`}>
            <div className="flex relative inset-0 flex-col mt-5 ml-5 w-full">
                <span className="bg-white hover:bg-gray300 active:bg-blue100 w-8 rounded-md" onClick={() => setToggleMenu(!toggleMenu)}>
                    <Icon className="text-orange700" path={mdiKeyboardBackspace} size={1.2}/>
                </span>
            </div>
            <div className="flex flex-col mt-5 w-full gap-y-4">
                <Link href="/admin/announcements" className="flex flex-row gap-x-2 pl-10 py-2 bg-white hover:bg-gray300 active:bg-blue100" onClick={() => setToggleMenu(!toggleMenu)}>
                    <Icon className="text-orange700" path={mdiBullhorn} size={1} />
                    <h1>Announcements</h1>
                </Link>
                <Link href="/admin/merchandise" className="flex flex-row gap-x-2 pl-10 py-2 bg-white hover:bg-gray300 active:bg-blue100" onClick={() => setToggleMenu(!toggleMenu)}>
                    <Icon className="text-orange700" path={mdiTshirtCrew} size={1} />
                    <h1>Merchandise</h1>
                </Link>
                <Link href="/admin/sponsors" className="flex flex-row gap-x-2 pl-10 py-2 bg-white hover:bg-gray300 active:bg-blue100" onClick={() => setToggleMenu(!toggleMenu)}>
                    <Icon className="text-orange700" path={mdiHandshake} size={1} />
                    <h1>Sponsors</h1>
                </Link>
                <Link href="/admin/members" className="flex flex-row gap-x-2 pl-10 py-2 bg-white hover:bg-gray300 active:bg-blue100" onClick={() => setToggleMenu(!toggleMenu)}>
                    <Icon className="text-orange700" path={mdiAccount} size={1} />
                    <h1>Members</h1>
                </Link>
            </div>
        </div>
    )}
    </Fragment>
  )
}

export default AdminNavBar;