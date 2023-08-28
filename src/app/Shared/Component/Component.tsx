import React, { ReactNode } from 'react';
import { JsxElement } from 'typescript';

type Props ={
    children: string | JSX.Element | JSX.Element[];
  }
const Component = ({children}: Props) => {
    return (
        <div className='w-full lg:w-[1440px]'>
            {children}
        </div>
    );
};

export default Component;