import Image from 'next/image';
import NextLink from 'next/link';
import { Spacer, Text, useTheme } from '@nextui-org/react';

export const Navbar = () => {
  const { theme } = useTheme();

  return (
    <nav
      style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0 1.5rem',
        backgroundColor: theme?.colors.gray100.value,
      }}
    >
      <Image
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
        alt="Icono de la app"
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <a style={{ display: 'flex' }}>
          <Text color="white" h2>
            P
          </Text>
          <Text color="white" h3>
            okemon
          </Text>
        </a>
      </NextLink>

      <Spacer css={{ flex: 1 }} />

      <NextLink href="/favorites">
        <a>
          <Text color="white" weight="semibold">Favoritos</Text>
        </a>
      </NextLink>
    </nav>
  );
};
