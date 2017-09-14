import React from 'react';
import { StyleSheet,  View } from 'react-native';
import firebase from 'firebase';
import { Header } from './src/components/common';
import LogInForm from  './src/components/LogInForm';



export default class App extends React.Component {
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAVBwU61qSoEICrWfoN75ofzHXfKWqF-OY",
      authDomain: "authpractice-a22f2.firebaseapp.com",
      databaseURL: "https://authpractice-a22f2.firebaseio.com",
      projectId: "authpractice-a22f2",
      storageBucket: "authpractice-a22f2.appspot.com",
      messagingSenderId: "943426312879"
    });  

  }

  render() {
    return (
      <View >
        <Header headerText="Authentication"/>
        <LogInForm/>
      </View>
    );
  }
}


