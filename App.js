import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

// You can import from local files
// or any pure javascript modules available in npm
import HomeComponent from './components/homePage/index';
import AssetExample from './components/AssetExample';


export default function App() {


  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40 }}>Inter Black</Text>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: Constants.statusBarHeight * 5,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
