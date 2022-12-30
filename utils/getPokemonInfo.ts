import { pokeApi } from '../api';
import { Pokemon } from '../interfaces';

export const getPokemonInfo = async (type: string) => {
  const { data } = await pokeApi.get<Pokemon>(`/pokemon/${type}`);

  return {
    id: data.id,
    name: data.name,
    sprites: data.sprites,
  };
};
