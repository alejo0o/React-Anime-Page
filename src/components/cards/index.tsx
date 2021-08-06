import * as React from 'react';
import { Box, Badge, Image } from '@chakra-ui/react';
import { PAGE_LOGO } from '../utils';
import { CardInformation } from '../utils/types';
import { useMediaQuery } from '@chakra-ui/react';

const Index = ({ anime, cardWidth }: CardInformation): JSX.Element => {
  const [smallerThan480] = useMediaQuery('(max-width: 480px)');

  return (
    <Box maxW={cardWidth} borderWidth='2px' borderRadius='lg' overflow='hidden'>
      {anime.coverImage ? (
        <Image
          src={anime.coverImage.original}
          alt={anime.canonicalTitle}
          h={smallerThan480 ? 'auto' : '13em'}
          w='100%'
        />
      ) : (
        <Image
          src={PAGE_LOGO}
          alt={anime.canonicalTitle}
          h={smallerThan480 ? 'auto' : '13em'}
          w='100%'
        />
      )}

      <Box p='6' fontSize='lg'>
        <Box d='flex' alignItems='baseline'>
          <Badge
            borderRadius='full'
            px='2'
            colorScheme='teal'
            fontSize='inherit'>
            {anime.status}
          </Badge>
          <Box
            color='gray.500'
            fontWeight='semibold'
            letterSpacing='wide'
            textTransform='uppercase'
            ml='2'>
            &bull; {anime.episodeCount} episodes
          </Box>
        </Box>

        <Box mt='1' as='h1' fontWeight='bold' lineHeight='tight' fontSize='3xl'>
          {anime.canonicalTitle}
        </Box>

        <Box fontSize='xl'>
          <Box as='p' color='gray.600'>
            <strong>Type:</strong> {anime.showType}
          </Box>
          <Box as='p' color='gray.600'>
            <strong>Start:</strong> {anime.startDate}
          </Box>
          <Box as='p' color='gray.600'>
            <strong>Clasification:</strong> {anime.ageRatingGuide}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
