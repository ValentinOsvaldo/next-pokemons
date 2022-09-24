import { FC } from 'react';
import { useRouter } from 'next/router';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { SmallPokemon } from '../../interfaces';

interface Props extends SmallPokemon {}

export const PokeCard: FC<Props> = ({ id, img, name }) => {
  const router = useRouter();

  const onClick = () => {
    router.push(`/pokemon/${id}`);
  };

  return (
    <Grid xs={6} sm={3} md={2}>
      <Card isHoverable isPressable onClick={onClick}>
        <Card.Body css={{ padding: '1rem' }}>
          <Card.Image src={img} alt={name} width="100%" height={140} />
        </Card.Body>
        <Card.Footer>
          <Row justify="space-between">
            <Text>{name}</Text>
            <Text>#{id}</Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
