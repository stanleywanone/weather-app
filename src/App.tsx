import * as React from 'react';
export interface HelloWorldProps {
  userName: string;
  lang: string;
}

const sdf = '12';

export const App = (props: HelloWorldProps) => (
  <h1>
    Hi {props.userName} from React! Welcome to {props.lang}!
  </h1>
);
