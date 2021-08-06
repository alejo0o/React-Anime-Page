import { Badge, Box } from '@chakra-ui/react';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Card from '../cards';
import { InformationArray } from '../utils/types';

const index = ({ animeList }: InformationArray) => {
  return (
    <div className='p-3'>
      <Box className='mb-3'>
        <Badge colorScheme='blue' className='fs-md-2 fs-3'>
          Recomendations
        </Badge>
      </Box>
      {animeList.map((anime) => (
        <div key={anime.id} className='mb-5'>
          <Link
            to={`/anime/${anime.id}`}
            className='item text-reset text-decoration-none'>
            <Card anime={anime.attributes} cardWidth='md' />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;
