import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import './Feedback.scss';

storiesOf('Button', module).add('with text', () => (
  <button onClick={action('clicked')}>Click</button>
));
