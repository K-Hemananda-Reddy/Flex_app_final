import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function NavPayload({navigation}) {

  const handleClick=async()=>{
    await AsyncStorage.removeItem("user")
    navigation.navigate("Register")
  }

  return (
    <View className="bg-black items-center">
      <TouchableOpacity onPress={()=>navigation.navigate("Device")} className="bg-blue-400 rounded-lg p-3 w-5/6 mb-4"><Text className="text-center text-white">Link Device</Text></TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Contact")} className="bg-blue-400 rounded-lg p-3 w-5/6 mb-4"><Text className="text-center text-white">Update Emergency Contact</Text></TouchableOpacity>
      <TouchableOpacity onPress={handleClick} className="bg-red-500 rounded-lg p-3 w-5/6 mb-4"><Text className="text-center text-white">Logout</Text></TouchableOpacity>
    </View>
  )
}