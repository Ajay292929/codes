import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native';

import SignInScreen from './src/screen/SignInScreen';

const App = () => {

  return (
   
      <SafeAreaView style={styles.root}>
        
      <SignInScreen />   
    
   
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }})

  export default App
  
