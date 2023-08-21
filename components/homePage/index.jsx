import * as React from 'react';
import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import zxcvbn from 'zxcvbn';
import { styles } from './styles';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';





const HomeComponent = () => {
  //const [text, setText] = React.useState("");
  const [password, setPassword] = React.useState('');
  const [strength, setStrength] = React.useState(0);

  const checkPasswordStrength = (value) => {
    const { score } = zxcvbn(value);
    console.log("Score: ", score);
    setStrength(score); 9
  };

  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }


  const getTextStyle = (strength) => {
    let resultStyling = {};
    switch (strength) {
      case 0:
        resultStyling = {
          fontSize: 18, color: '#eb4334', borderRadius: 5, padding: 10, borderWidth: 2, borderColor: '#eb4334'
        };
        break;
      case 1:
        resultStyling =
        {
          fontSize: 18, color: '#f5cb42', borderRadius: 5, padding: 10, borderWidth: 2, borderColor: '#f5cb42'
        }
        break;
      case 2:
        resultStyling = {
          fontSize: 18, color: '#8af542', borderRadius: 5, padding: 10, borderWidth: 2, borderColor: '#8af542'
        }
        break;
      case 3:
        resultStyling = {
          fontSize: 18, color: '#34c9eb', borderRadius: 5, padding: 10, borderWidth: 2, borderColor: '#34c9eb'
        }
        break;
      case 4:
        resultStyling = {
          fontSize: 18, color: '#3434eb', borderRadius: 5, padding: 10, borderWidth: 2, borderColor: '#3434eb'
        }
        break;
    }

    return resultStyling;
  }


  return (
    <View style={styles.pwdContainer}>
      <Text style={[styles.title, { fontFamily: 'Inter_900Black'}]}>Password Health Checker</Text>


      <View style={styles.tempContainer}>
        <TextInput mode='flat' underlineColor="#5cb85c" outlineColor="#5cb85c"
          theme={{
            colors: {
              primary: '#5cb85c',
            }
          }}

          label="Enter your Password"
          value={password}
          onChangeText={(text) => {
            setPassword(text);
            checkPasswordStrength(text);
          }} autoCompleteType={undefined} />

      </View>

      <View style={[styles.resultContainer]}>
        <Text style={[styles.resulArea, { fontFamily: 'Inter_900Black', fontSize: 20 }]}>Password Strength:</Text>
        <Text style={getTextStyle(strength)}>
          {strength === 0 && 'Very Weak!!'}
          {strength === 1 && 'Weak!!'}
          {strength === 2 && 'Fair!!'}
          {strength === 3 && 'Strong!!'}
          {strength === 4 && 'Very Strong!!'}
        </Text>
      </View>

    </View>
  );
};

export default HomeComponent;


