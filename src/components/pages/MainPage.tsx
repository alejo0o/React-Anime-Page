import * as React from 'react';
import { useState } from 'react';
import useSWR from 'swr';
import { Heading, useMediaQuery, Spinner } from '@chakra-ui/react';
import { API_URL, fetcher } from '../utils';
import GridLayout from '../cardsContainers/GridLayout';
import Swiper from '../swiper';
import Paginated from '../pagination';

const MainPage = (): JSX.Element => {
  const [smallerThan480] = useMediaQuery('(max-width: 480px)');
  const [page, setpage] = useState(0);

  const { data: commonAnimes, error: commonError } = useSWR(
    `${API_URL}?page[limit]=6&page[offset]=${page}`,
    fetcher
  );
  const { data: popularAnimes, error: popularError } = useSWR(
    `${API_URL}?page[limit]=6&page[offset]=${page}&sort=popularityRank`
  );

  if (!commonAnimes || !popularAnimes)
    return (
      <div className='d-flex vh-100 justify-content-center align-items-center'>
        <Spinner color='#189AB4' size='xl' thickness='6px' />
      </div>
    );
  return (
    <div className='p-4'>
      <div className='p-sm-3'>
        <Heading as='h1' color='#003060' size={smallerThan480 ? 'md' : '3xl'}>
          Most Popular Animes
        </Heading>
        <Swiper animeList={popularAnimes.data} />
      </div>
      <div className='py-md-5 p-3'>
        <Heading
          as='h1'
          color='#003060'
          size={smallerThan480 ? 'md' : '3xl'}
          className='pb-sm-2 pb-2 px-sm-5'>
          Animes
        </Heading>
        <GridLayout animeList={commonAnimes.data} />
      </div>
      <Paginated
        itemsNumber={9}
        setpage={(number) => {
          setpage(number * 6);
        }}
      />
    </div>
  );
};

export default MainPage;
