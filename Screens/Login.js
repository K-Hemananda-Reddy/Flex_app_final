import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Loader'

export default function Login({navigation}) {

    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [loading,setLoading]=useState(false)

    const handleClick=async()=>{
        setLoading(true)
        const response=await axios.post("https://flex-api-rohiths-projects-b8dbb91a.vercel.app/api/user/login",{
            email,
            password
        })
        setLoading(false)

        if(response.data.message=="Done"){
            await AsyncStorage.setItem("user",email)
            navigation.navigate("Home")
        }
        else{
            alert(response.data.message)
        }
    }

    if(loading) return <Loader/>

  return (
    

    <View className="flex-1 bg-red-300 items-center justify-center">
        <Text className="text-3xl font-bold mb-10">LOGIN</Text>
        
        <View className="w-full items-center">

        <TextInput value={email} onChangeText={(text)=>setEmail(text)} className="border-b-2 p-3 my-2 w-2/3" placeholder='Enter Email'/>
        <TextInput value={password} onChangeText={(text)=>setPassword(text)} className="border-b-2 p-3 my-2 w-2/3" placeholder='Enter Password'/>
        <TouchableOpacity onPress={handleClick} className="w-full items-center">
            <Text className="bg-red-500 py-3 px-5 mt-4 rounded-lg text-white w-2/3 text-center ">Login</Text>
        </TouchableOpacity>
        </View>
    </View>
    
  )
}