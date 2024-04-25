import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

export default function Contact() {
  const [emergencyContact,setEmergencyContact]=useState("")
  const handlePress=async()=>{
    const email=await AsyncStorage.getItem("user")
    const response=await axios.put("https://flex-api-rohiths-projects-b8dbb91a.vercel.app/api/user/update",{
      email,
      emergencyContact
    })
    alert(response.data.message)
  }
  return (
    <View className="flex-1 h-hull justify-center items-center space-y-3">
      <Text className="font-bold text-lg">Emergency Contact</Text>
      <TextInput value={emergencyContact} onChangeText={(text)=>setEmergencyContact(text)} className="p-3 text-center border-4 w-2/3 rounded-lg border-blue-400" placeholder='Contact Number'/>
      <TouchableOpacity onPress={handlePress} className="bg-green-600 p-4 rounded-lg"><Text className="text-white">Update</Text></TouchableOpacity>
    </View>
  )
}