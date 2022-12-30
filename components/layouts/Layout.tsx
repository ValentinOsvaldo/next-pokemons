import Head from 'next/head';
import { Navbar } from '../ui';

interface Props {
  children: JSX.Element | JSX.Element[];
  title?: string;
}

const origin = typeof window === 'undefined' ? '' : window.location.origin

export const Layout: React.FC<Props> = ({ children, title = 'Pokemon App' }) => {
  return (
    <>
      <Head>
        <meta name="author" content="Osvaldo Valentin" />
        <meta name="description" content={`Información sobre el pokemon ${title}`} />
        <meta name="keywords" content={`pokemon, pokedex, ${ title }`} />

        <meta property="og:title" content={title} />
        <meta property="og:description" content={`Esta es una página sobre ${title}`} />
        <meta property="og:image" content={`${origin}/img/banner/.png`} />
        <title>{title}</title>
      </Head>
      <Navbar />
      <main>{children}</main>
    </>
  );
};
