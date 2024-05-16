import React from "react";
import {View,Text, ActivityIndicator} from 'react-native'; 
import { Colors, FontSize, responsive } from "../utils/theme";

const Loader = ()=>{
    return(
        <View
        style={{
          backgroundColor: Colors.light,
          justifyContent: 'center',
          alignItems: 'center',
          flex:1
        }}>
        <ActivityIndicator
          size={'large'}
          color={Colors.secondary}
        />
        <Text
        style={{
            fontFamily:"Roboto-Regular",
            color:Colors.dark,
            size:FontSize.small, 
            marginTop:responsive.rf(3)
        }}
        >please wait, it's loading...</Text>
      </View>
    )
}; 

export default Loader; 