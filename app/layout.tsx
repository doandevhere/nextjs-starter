import React from 'react';
import { fonts } from './font';
import './styles/global.scss';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout(props: Props) {
  const { children } = props;

  return (
    <html>
      <body className={fonts.roboto.className}>{children}</body>
    </html>
  );
}
