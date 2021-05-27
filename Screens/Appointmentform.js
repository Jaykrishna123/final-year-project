import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View,Text} from 'react-native'
import Background from '../Componets/Background'
import Logo from '../Componets/Logo'
import Button from '../Componets/Button'
import TextInput from '../Componets/TextInput'
import BackButton from '../Componets/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import { loginUser } from '../api/auth-api2'
import Toast from '../Componets/Toast'

const Appointmentform = ({ navigation }) => {


  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <TextInput
        label="Mobile Number"
        keyboardType={"phone-pad"}
      />
     <Text style={{fontSize:12,textAlign:'center',paddingTop:5}}>We will send appointment-related communications on this number</Text>
      <Button mode="contained" style={{marginTop:20}}>
        Submit
      </Button>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})

export default Appointmentform
