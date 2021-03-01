import React, { useEffect, useState } from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return <AppNavigator />;
}
