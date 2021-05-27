import React,{useState} from 'react';
import Background from '../Componets/Background';
import Logo from '../Componets/Logo';
import Button from '../Componets/Button';


const HomeScreen = ({ navigation }) => (
  <Background>
   <Logo/>
   <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
    mode="outlined"
    onPress={() => navigation.navigate('RegisterScreen')}
  >
    Sign Up
  </Button>
  </Background>
)
    
      export default HomeScreen;