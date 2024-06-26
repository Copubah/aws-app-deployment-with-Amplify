import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  withAuthenticator,
  Button,
  Heading,
  Image,
  View,
  Card,
} from "@aws-amplify/ui-react"

function App(signOut) {
  return (
    < View className='App'>
      <Card>
        <Image src={logo} className='App-logo' alt="logo"/>
        <Heading level={1}>WE ARE LIVE</Heading>
      </Card>
        <Button onClick={signOut}>Sign Out</Button>
      </View>
  );
}

export default withAuthenticator(App);
