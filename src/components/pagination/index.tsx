import * as React from 'react';
import { PaginationTypes } from '../utils/types';

const index = ({ itemsNumber, setpage }: PaginationTypes): JSX.Element => {
  let items = [];
  for (let number = 0; number <= itemsNumber; number++) {
    items.push(
      <li key={number} className={`page-item`}>
        <button
          className='page-link'
          onClick={() => {
            setpage(number);
          }}>
          {number + 1}
        </button>
      </li>
    );
  }

  return (
    <div className='d-flex justify-content-center'>
      <ul className='pagination'>
        <li className='page-item'>
          <button className='page-link'>
            <span aria-hidden='true'>&laquo;</span>
          </button>
        </li>
        {items}
        <li className='page-item'>
          <button className='page-link'>
            <span aria-hidden='true'>&raquo;</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default index;
