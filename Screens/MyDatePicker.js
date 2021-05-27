import React, { Component } from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { DatePicker} from 'native-base';
export default class DatePickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };
    this.setDate = this.setDate.bind(this);
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
  render() {
    return (
         <View style={styles.specialist_doc_text}>
         <DatePicker
         defaultDate={new Date(2018, 4, 4)}
         minimumDate={new Date(2018, 1, 1)}
         maximumDate={new Date(2018, 12, 31)}
         locale={"en"}
         timeZoneOffsetInMinutes={undefined}
         modalTransparent={false}
         animationType={"fade"}
         androidMode={"default"}
         placeHolderText="Select date"
         textStyle={{ color: "green" }}
         placeHolderTextStyle={{ color: "#d3d3d3" }}
         onDateChange={this.setDate}
         disabled={false}
         />
       
         </View>
       
       
    );
  }
}
const styles = StyleSheet.create({
  specialist_doc_text: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#b2bec3',
    width: 270,
    marginLeft: 40,
    borderRadius: 5

}
})