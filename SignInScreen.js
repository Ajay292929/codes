import React from 'react';
import { View,Image,StyleSheet,useWindowDimensions } from 'react-native';
import logo from'../../../assetss/images/logo.png';
import CustomInput from '../../components/CustomInput';


const SignInScreen =  () => {
     const {height} = useWindowDimensions();
    return (

        <View style= {styles.root}>
        <Image 
          source={logo} 
           style ={[styles.logo, {height: height * 0.3}]}
           resizeMode="contain" 
       /> 

      <CustomInput />

       </View>
 );
};

const styles = StyleSheet.create({

   root: {

        alignItems: 'center',
        padding: 20,
    },

   logo:{
     width: 1000,
    maxWidth: 1100,
   maxHeight: 200 ,
   }
})

export default SignInScreen
