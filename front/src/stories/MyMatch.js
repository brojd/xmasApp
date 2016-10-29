import React from 'react';
import { storiesOf } from '@kadira/storybook';
import MyMatch from '../route_components/MyMatch/MyMatch.component';

storiesOf('MyMatch', module)
  .add('MyMatch', () => (
    <MyMatch />
  ));
