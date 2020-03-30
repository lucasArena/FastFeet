import React from 'react';
import { StatusBar } from 'react-native';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const signed = useSelector(state => state.auth.signed);
  const color = signed ? '#FFF' : '#7D40E7';
  const barStyle = signed ? 'dark-content' : 'light-content';

  const Routes = createRouter(signed);
  return (
    <>
      <Routes />
      <StatusBar barStyle={barStyle} backgroundColor={color} />
    </>
  );
}
