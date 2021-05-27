import React, { Component } from 'react';
 
import { StyleSheet, Platform, View, ActivityIndicator, FlatList, Text, Alert, YellowBox,TouchableOpacity,ScrollView} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class SlotScreen extends Component {
 
 constructor(props) {

   super(props);

   this.state = {

     isLoading: true

   }

   YellowBox.ignoreWarnings([
    'Warning: componentWillMount is deprecated',
    'Warning: componentWillReceiveProps is deprecated',
  ]);

 }
 
GetItem (flower_name) {
  
 Alert.alert(flower_name);
 
 }
 
 FlatListItemSeparator = () => {
   return (
     <View
       style={{
         height: .5,
         width: "100%",
         backgroundColor: "#000",
       }}
     />
   );
 }

 webCall=()=>{

  return fetch('http://www.json-generator.com/api/json/get/bQnQOAcxQi?indent=2')
         .then((response) => response.json())
         .then((responseJson) => {
           this.setState({
             isLoading: false,
             dataSource: responseJson
           }, function() {
             // In this block you can do something with new state.
           });
         })
         .catch((error) => {
           console.error(error);
         });

 }

 componentDidMount(){

  this.webCall();

 }
 
 render() {

   if (this.state.isLoading) {
     return (

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

         <ActivityIndicator size="large" />

       </View>
       
     );

   }
 
   return (
 
     <View style={styles.MainContainer}>
 
       <FlatList
       
        data={ this.state.dataSource }
        

        renderItem={({item}) => 
        
            <View>
            <ScrollView>
            <View style={{display:'flex',
            flexDirection:'row',
            marginLeft:30,
           marginTop:30}}>
            <FontAwesome
             name="sun-o"
             size={20}
             color="black"
             /> 
             <Text style={{paddingLeft:10,fontSize:18}}>Morning</Text>
            </View>  

           
            <View style={styles.mainbox}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Appointmentform')}>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot1}</Text>
             </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot2}</Text>
             </View>
            </TouchableOpacity>
            </View>
             
            <View style={styles.mainbox}>
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot3}</Text>
             </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot4}</Text>
             </View>
            </TouchableOpacity>
            </View>

            <View style={{display:'flex',
            flexDirection:'row',
            marginLeft:30,
           marginTop:80}}>
            <FontAwesome
             name="sun-o"
             size={20}
             color="black"
             /> 
             <Text style={{paddingLeft:10,fontSize:18}}>Afternoon</Text>
            </View>  

           
            <View style={styles.mainbox}>
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot5}</Text>
             </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot6}</Text>
             </View>
            </TouchableOpacity>
            </View>
             
            <View style={styles.mainbox}>
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot7}</Text>
             </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot8}</Text>
             </View>
            </TouchableOpacity>
            </View>
             

            <View style={{display:'flex',
            flexDirection:'row',
            marginLeft:30,
           marginTop:80}}>
            <FontAwesome
             name="moon-o"
             size={20}
             color="black"
             /> 
             <Text style={{paddingLeft:10,fontSize:18}}>Evening</Text>
            </View>  

           
            <View style={styles.mainbox}>
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot9}</Text>
             </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot10}</Text>
             </View>
            </TouchableOpacity>
            </View>
             
            <View style={styles.mainbox}>
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot11}</Text>
             </View>
            </TouchableOpacity>
            
            <TouchableOpacity>
            <View style={styles.box}>
             <Text style={styles.text1}>{item.slot12}</Text>
             </View>
            </TouchableOpacity>
            </View>
             
           
            </ScrollView>
              
            </View>
            
        
          }

        keyExtractor={(item, index) => index.toString()}
        
        />
 
     </View>
   );
 }
}
 
const styles = StyleSheet.create({
mainbox:{
   display:'flex',
   flexDirection:'row',
   justifyContent:'space-around',
   alignItems:'center',
   marginTop:30,
}, 
box:{
  borderWidth:  1,  
  borderLeftWidth:  1,
  width:120,
  height:50,
  borderColor:'#9fa9a3',
  
  
  
},
text1:{
  paddingTop:10,
  textAlign:'center',
  fontSize:18,
  color:'#74b9ff'
}
});