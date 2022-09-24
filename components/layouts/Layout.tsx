import { FC } from 'react';
import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

export const Layout: FC<Props> = ({ children, title = 'Pokemon App' }) => {
  return (
    <>
      <Head>
        <meta name="author" content="Osvaldo Valentin" />
        <meta name="description" content={`Información sobre el pokemon ${title}`} />
        <meta name="keywords" content={`pokemon, pokedex, ${ title }`} />
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
