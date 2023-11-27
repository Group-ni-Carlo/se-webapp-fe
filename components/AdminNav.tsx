"use client"
import React from 'react';
import { Fragment } from 'react';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Icon from '@mdi/react';
import { mdiMenu, mdiBullhorn, mdiTshirtCrew, mdiHandshake, mdiKeyboardBackspace } from '@mdi/js';

const AdminNavBar: React.FC = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <Fragment>
    <section className="w-full flex items-center px-2.5 shadow-md flex-center flex-row h-12 bg-white">
        <div className="flex gap-2 flex-center" onClick={() => setToggleMenu(!toggleMenu)}>
            <Icon className="bg-orange text-white rounded-lg p-0.5" path={mdiMenu} size={1.05} />
        </div>

        <div className="sm:flex hidden">
            <h1>Software Engineering</h1>
        </div>
    </section>
    {toggleMenu && (
        <div className="flex flex-col absolute h-full bg-white w-60 m-0 shadow-md top-0 gap-y-5">
            <div className="flex relative inset-0 flex-col mt-5 ml-5 w-full">
                <span onClick={() => setToggleMenu(!toggleMenu)}>
                    <Icon className="text-orange" path={mdiKeyboardBackspace} size={1.2}/>
                </span>
            </div>
            <div className="flex flex-col mt-5 ml-10 w-full gap-y-4">
                <Link href="/admins/announcement" className="flex flex-row gap-x-2">
                    <Icon className="text-orange" path={mdiBullhorn} size={1} />
                    <h1>Announcements</h1>
                </Link>
                <Link href="/admins/merch" className="flex flex-row gap-x-2">
                    <Icon className="text-orange" path={mdiTshirtCrew} size={1} />
                    <h1>Merchandise</h1>
                </Link>
                <Link href="/admins/merch" className="flex flex-row gap-x-2">
                    <Icon className="text-orange" path={mdiHandshake} size={1} />
                    <h1>Sponsors</h1>
                </Link>
            </div>
        </div>
    )}
    </Fragment>
  )
}

export default AdminNavBar;