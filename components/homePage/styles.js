import { StyleSheet } from 'react-native'
import * as Font from 'expo-font';




export const styles = StyleSheet.create({

  title: {
    paddingVertical: 8,
    borderWidth: 2,
    borderColor: '#5cb85c',
    borderRadius: 6,
    backgroundColor: '#5cb85c',
    color: '#f9f9f9',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold'
  },

  pwdContainer: {
    flex: 1,
    paddingTop: 20,
    marginTop: 40,
    margin: 10,
    paddingVertical: 10,

  },
  tempContainer:
  {
    flex: 1,
    marginTop: 10,
    marginBottom: 20,
    padding: 40


  },
  resultContainer: {
    flex: 2,
    marginTop: 10,
    padding: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  resulArea:
  {
    fontSize: 20,
    padding: 15
  },

});