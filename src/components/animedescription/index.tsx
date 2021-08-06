import * as React from 'react';
import { Image, useMediaQuery } from '@chakra-ui/react';
import { CardInformation } from '../utils/types';

type Information = {
  title: string;
  info: string;
};

const AnimeInfo = ({ title, info }: Information) => {
  const [smallerThan768] = useMediaQuery('(max-width: 768px)');
  return (
    <div className={`pb-4 ${smallerThan768 ? 'text-center' : ''}`}>
      <h3>
        <strong>{title}</strong>
      </h3>
      <div>{info}</div>
    </div>
  );
};

const index = ({ anime }: CardInformation) => {
  const [smallerThan768] = useMediaQuery('(max-width: 768px)');
  return (
    <div
      className='d-md-flex w-75'
      style={{
        boxShadow:
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
      }}>
      <div className={`${smallerThan768 ? 'w-100' : 'w-50'} h-auto`}>
        <Image className='w-100 h-100' src={anime.coverImage.original} />
      </div>
      <div className='p-2 w-md-50 rounded fs-4' style={{ background: 'white' }}>
        <AnimeInfo title='Original Title:' info={anime.canonicalTitle} />
        <AnimeInfo title='Launch Date:' info={anime.startDate} />
        <AnimeInfo title='Rating Guide:' info={anime.ageRatingGuide} />
        <AnimeInfo title='Show Type:' info={anime.showType} />
      </div>
    </div>
  );
};

export default index;
