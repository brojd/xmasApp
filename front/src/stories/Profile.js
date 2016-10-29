import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Profile from '../route_components/Profile/Profile.component';

storiesOf('Profile', module)
  .add('Profile', () => (
    <Profile />
  ));
