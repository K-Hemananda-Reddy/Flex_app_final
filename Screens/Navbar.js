import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import NavPayload from './NavPayload'

export default function Navbar({navigation}) {

    const [nav,setNav]=useState(false)

  return (
    <View>

    <View className="bg-black w-full  p-8  flex-row justify-between">
        <TouchableOpacity onPress={()=>navigation.navigate("Profile")}>

      <Image className="h-11 w-11 rounded-full" source={require("../assets/user.png")}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setNav(!nav)}>
      <Image className="bg-white rounded-full h-11 w-11" source={require("../assets/hamburger.png")}/>
      </TouchableOpacity>
      
    </View>
    {nav &&
      <NavPayload navigation={navigation}/>
    }
    </View>
  )
}