import React from 'react';
import { StyleSheet,  View } from 'react-native';
import firebase from 'firebase';
import { Header, Button,  Spinner } from './src/components/common';
import LogInForm from  './src/components/LogInForm';



export default class App extends React.Component {
  
  state = { loggedIn: null };

  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyAVBwU61qSoEICrWfoN75ofzHXfKWqF-OY",
      authDomain: "authpractice-a22f2.firebaseapp.com",
      databaseURL: "https://authpractice-a22f2.firebaseio.com",
      projectId: "authpractice-a22f2",
      storageBucket: "authpractice-a22f2.appspot.com",
      messagingSenderId: "943426312879"
    });  

    firebase.auth().onAuthStateChanged((user) => {
      if (user){
        this.setState({loggedIn: true});
      } else {
        this.setState({loggedIn: false});
      }

    });

  }

  renderContent() {
    switch(this.state.loggedIn){
      case true:
        return (
         
            <Button onPress={() => firebase.auth().signOut()}>
              Log Out
            </Button>
         
        );
      case false:
        return <LogInForm/>;
      default: 
        return <Spinner size="large"/>; 
    }
    
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication"/>
        {this.renderContent()}
      </View>
    );
  }
}


