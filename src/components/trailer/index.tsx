import * as React from 'react';
import { Heading, Divider, Box, useMediaQuery } from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { CardInformation } from '../utils/types';

const index = ({ anime }: CardInformation) => {
  const [smallerThan768] = useMediaQuery('(max-width: 768px)');

  return (
    <div className='p-4'>
      <Heading as='h1'>{anime.canonicalTitle}</Heading>
      <Divider colorScheme='blue' className='mb-2' />
      <div className='d-flex justify-content-center mb-3'>
        <div
          className={`${smallerThan768 ? 'w-100' : 'w-75'}`}
          style={{ height: smallerThan768 ? '' : '40rem', minHeight: '20rem' }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${anime.youtubeVideoId}`}
            controls
            playsinline
            width='100%'
            height='100%'
          />
        </div>
      </div>
      <Box textAlign='justify' p={4}>
        <Heading pb={4}>
          <strong>Synopsis:</strong>
        </Heading>
        <p>{anime.synopsis}</p>
      </Box>
    </div>
  );
};

export default index;
