import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";

const ImageExample = () => {
  return (
   
      
        <Image
          style={{
            
            height: 100,
            width: 200
          }}
          source={require('C:/Repos/demoProject/NativeSampleImages/Acid_Reflux.png')}
        />
       
      
   
  );
   }

export default ImageExample;