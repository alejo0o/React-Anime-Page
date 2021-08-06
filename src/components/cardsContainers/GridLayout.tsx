import * as React from 'react';
import { SimpleGrid, Box } from '@chakra-ui/react';
import Card from '../cards';
import { InformationArray } from '../utils/types';
import { useMediaQuery } from '@chakra-ui/react';
import { ErrorBoundary } from 'react-error-boundary';
import Error from '../Error/Error';
import { Link } from 'react-router-dom';

const MixedLayout = ({ animeList }: InformationArray): JSX.Element => {
  const [smallerThan1046] = useMediaQuery('(max-width: 1046px)');
  return (
    <Box display='flex' className='p-md-5'>
      <ErrorBoundary FallbackComponent={Error} onReset={() => {}}>
        <SimpleGrid
          width='100%'
          minChildWidth={smallerThan1046 ? 'auto' : '30em'}
          spacing='40px'
          justifyContent='center'>
          {animeList.map((anime) => (
            <Link
              to={`/anime/${anime.id}`}
              className='item text-reset text-decoration-none'>
              <Card key={anime.id} anime={anime.attributes} cardWidth='lg' />
            </Link>
          ))}
        </SimpleGrid>
      </ErrorBoundary>
    </Box>
  );
};

export default MixedLayout;
