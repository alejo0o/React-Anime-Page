import * as React from 'react';
import { InformationArray } from '../utils/types';

const hoc = (WrappedComponent: React.ComponentType<InformationArray>) => {
  const HighOrderComponent = (props: InformationArray) => {
    return (
      <div>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return HighOrderComponent;
};

export default hoc;
