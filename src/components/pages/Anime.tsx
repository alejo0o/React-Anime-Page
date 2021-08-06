import * as React from 'react';
import useSWR from 'swr';
import { RouteComponentProps } from 'react-router';
import { Heading, useMediaQuery, Spinner } from '@chakra-ui/react';
import { API_URL, fetcher } from '../utils';
import Trailer from '../trailer';
import Recomendations from '../recomendations';
import AnimeDescription from '../animedescription';
import { MatchParams } from '../utils/types';

const Anime = ({ match }: MatchParams) => {
  const [smallerThan1166] = useMediaQuery('(max-width: 1166px)');
  const { data, error } = useSWR(`${API_URL}/${match.params.id}`, fetcher);

  const { data: popularAnimes, error: popularError } = useSWR(
    `${API_URL}?page[limit]=4&sort=popularityRank`
  );
  console.log(popularAnimes);

  if (!data || !popularAnimes)
    return (
      <div className='d-flex vh-100 justify-content-center align-items-center'>
        <Spinner color='#189AB4' size='xl' thickness='6px' />
      </div>
    );

  return (
    <div className='d-flex'>
      <link
        href='http://fonts.cdnfonts.com/css/chizz-wide-high'
        rel='stylesheet'
      />
      <div
        className={smallerThan1166 ? 'auto' : 'w-75'}
        style={{
          background: '#fff',
          fontFamily: 'Chizz Wide High, sans-serif',
        }}>
        <Trailer anime={data.data.attributes} cardWidth='2xl' />
        <div className='d-flex justify-content-center mb-4'>
          <AnimeDescription anime={data.data.attributes} cardWidth='lg' />
        </div>
      </div>
      {smallerThan1166 ? (
        <></>
      ) : (
        <div style={{ background: '#EDF2F3' }}>
          <Recomendations animeList={popularAnimes.data} />
        </div>
      )}
    </div>
  );
};

export default Anime;
