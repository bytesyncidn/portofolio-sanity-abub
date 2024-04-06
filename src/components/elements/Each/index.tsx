import React from 'react';

import { generateRandomKey } from '~/lib/utils';

import { EachProps } from './types';

const Each = <T,>({ list, render, keyExtractor }: EachProps<T>) => {
  return (
    <React.Fragment>
      {list.map((item, index) => (
        <React.Fragment
          key={keyExtractor ? keyExtractor(item, index) : generateRandomKey()}
        >
          {render(item, index)}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Each;
