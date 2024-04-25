import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Loader'

export default function Register({navigation}) {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [phone,setPhone]=useState("")
    const [MacAddress,setMacAddress]=useState("")
    const [emergencyContact,setEmergencyContact]=useState("")
    const [deviceToken,setDeviceToken]=useState("")
    const [loading,setLoading]=useState(false)

    const handleClick=async()=>{
        setLoading(true)
        await axios.post("https://flex-api-rohiths-projects-b8dbb91a.vercel.app/api/user/register",{
            email,
            password,
            phone,
            MacAddress,
            emergencyContact,
            deviceToken
        })
        await AsyncStorage.setItem("user",email)
        setLoading(false)
        navigation.navigate("Home")
    }

    useEffect(()=>{

        const sendtoHome=async()=>{
            const value=await AsyncStorage.getItem("user")
        if(value){
            navigation.navigate("Home")
        }
        }

        sendtoHome();

        
    },[])


    if(loading){
        return <Loader/>
    }

  return (
    <View className="flex-1 pt-20 bg-violet-200 items-center">
      <Text className="text-3xl font-bold mb-10">Sign Up</Text>
      <View className="space-y-8 bg-violet-200 rounded-lg   w-4/5 p-5">
        <View className="  space-x-4">
            {/* <Text className="font-bold">Email</Text> */}
            <TextInput value={email} onChangeText={(text)=>setEmail(text)} className='px-5 py-1 border-b-2 text-center' placeholder='Email id'/>
        </View>
        <View className="  space-x-4">
            {/* <Text className="font-bold">Password :</Text> */}
            <TextInput value={password} onChangeText={(text)=>setPassword(text)} className='px-5 py-1 border-b-2 text-center' placeholder='password'/>
        </View>
        <View className=" space-x-4">
            {/* <Text className="font-bold">Phone :</Text> */}
            <TextInput value={phone} onChangeText={(text)=>setPhone(text)} className='px-5 py-1 border-b-2 text-center' placeholder='Phone Number'/>
        </View>
        <View className=" space-x-4">
            {/* <Text className="font-bold">MacAddress :</Text> */}
            <TextInput value={MacAddress} onChangeText={(text)=>setMacAddress(text)} className='px-5 py-1 border-b-2 text-center' placeholder='Mac Address of Device'/>
        </View>
        <View className=" space-x-4">
            {/* <Text className="font-bold">Emergency Contact :</Text> */}
            <TextInput value={emergencyContact} onChangeText={(text)=>setEmergencyContact(text)} className='px-5 py-1 border-b-2 text-center' placeholder='Enter Emergency Contact'/>
        </View>
        <View className=" space-x-4">
            {/* <Text className="font-bold">Device Token :</Text> */}
            <TextInput value={deviceToken}  onChangeText={(text)=>setDeviceToken(text)} className='px-5 py-1 border-b-2 text-center' placeholder='Enter Device Token'/>
        </View>
        <TouchableOpacity onPress={handleClick}>
            <Text className="text-center bg-violet-600 p-3 text-white rounded-lg">Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View className='flex-row mt-5'>
        <Text>Already a User ? </Text>
      <Text className="text-blue-500 underline" onPress={()=>navigation.navigate("Login")}>Login</Text>
      </View>
    </View>
  )
}