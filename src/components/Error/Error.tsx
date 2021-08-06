import * as React from 'react';
import { ReactErrorBoundary } from '../utils/types';

const Error = ({ error, resetErrorBoundary }: ReactErrorBoundary) => {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
};

export default Error;
