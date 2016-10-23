import React from 'react';
import { storiesOf } from '@kadira/storybook';
import App from '../components/App/App.component';

storiesOf('App', module)
  .add('App', () => (
    <App />
  ));
