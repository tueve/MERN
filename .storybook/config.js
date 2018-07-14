import React from 'react';
import { configure, setAddon, addDecorator } from '@storybook/react';
import infoAddon from '@storybook/addon-info';

const styles = {
  padding: '3em',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};
const Container = storyFn => <div style={styles}> {storyFn()} </div>;

addDecorator(Container);
setAddon(infoAddon);

function loadStories() {
  const req = require.context('../src/components', true, /\.story\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
