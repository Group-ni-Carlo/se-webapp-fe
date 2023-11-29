import React, { ReactNode } from 'react';
import '@styles/globals.css';

export const metadata: {[key: string]: string} = {
    title: "Software Engineering",
    description: "Home of the Philippine Society of Software Engineers"
}

type LayoutProps = {
    children?: ReactNode;
}

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
        <body className="bg-neutral-50">

            <main className="app">
                { children }
            </main>
        </body>
    </html>
  )
}

export default RootLayout