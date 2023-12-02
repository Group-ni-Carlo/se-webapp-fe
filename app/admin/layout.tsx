import AdminNavBar from '@components/AdminNav';
import React, { ReactNode } from 'react';

export const metadata: { [key: string]: string } = {
  title: 'Software Engineering',
  description: 'Home of the Philippine Society of Software Engineers'
};

type LayoutProps = {
  children?: ReactNode;
};

const RootLayout = ({ children }: LayoutProps) => {
  return (
    <main className="app">
      <AdminNavBar />
      {children}
    </main>
  );
};

export default RootLayout;
