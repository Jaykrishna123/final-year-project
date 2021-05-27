/*Example to make a call from the React Native App*/
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import call from 'react-native-phone-call';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Call extends React.Component {
  call = () => {
    //handler to make a call
    const args = {
      number: '7900090188',
      prompt: false,
    };

    call(args).catch(console.error);
  };
  render() {
    return (
        <TouchableOpacity>
        <View style={styles.phone_call_bg}>
        <FontAwesome
        name="phone"
        size={30}
        style={styles.phone_call_icon}
        onPress={this.call}/>
        <Text style={styles.call_text}>Call</Text>
        </View>
    </TouchableOpacity> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  phone_call_bg:{
    backgroundColor:'#fff',
    borderRadius:100,
    width:50,
    height:50,
    marginTop:-27,
    marginLeft:50,
    borderColor:'#6dd5ed',
    borderWidth:0.6,
  },
  phone_call_icon:{
    marginTop:10,
    marginLeft:13,
    color:'#6dd5ed'

},
call_text:{
    paddingTop:15,
    paddingLeft:12
},
});
