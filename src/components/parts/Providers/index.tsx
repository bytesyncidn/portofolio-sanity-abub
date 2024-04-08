'use client';

import PreviewProvider from '../PreviewProvider';
import { ProviderProps } from './types';

const Providers = (props: ProviderProps) => {
  return (
    <>
      {props.draftMode ? (
        <PreviewProvider token={props.token}>{props.children}</PreviewProvider>
      ) : (
        props.children
      )}
    </>
  );
};

export default Providers;
