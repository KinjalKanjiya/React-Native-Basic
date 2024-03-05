import React from 'react';
import { View , Text } from 'react-native';
import { AppwriteProvider } from './appwrite/AppWriteContext';
import { Router } from './routes/Router';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';
function App() {
  return (
    <AppwriteProvider> {/* Wrap your Router with AppWriteProvider */}
      <View style={{ flex: 1 }}>
    <Router/>
      </View>
     </AppwriteProvider>
  );
}

export default App;
