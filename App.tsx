import React, { useState } from 'react';
import { AppNavigator } from './src/navigation/AppNavigator';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer']);
import { UserContext } from './src/contexts/userContext';
import { User } from './src/types/User';

export default function App() {
  const [user, setUser] = useState<User>();
  return (
    // @ts-ignore
    <UserContext.Provider value={{ user, setUser }}>
      <AppNavigator />
    </UserContext.Provider>
  );
}
