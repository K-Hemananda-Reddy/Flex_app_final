import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Loader from './Loader'

export default function Profile() {

    const [userDetails,setUserDetails]=useState(null)
    const [loading,setLoading]=useState(false)

    useEffect(()=>{
        const getData=async()=>{
            setLoading(true)
            const email=await AsyncStorage.getItem("user")
            const response=await axios.put("https://flex-api-rohiths-projects-b8dbb91a.vercel.app/api/user",{
                email
            })
            setLoading(false)
            console.log(response.data)
            setUserDetails(response.data)
            console.log(userDetails)

        }

        getData();
    },[])


    if(loading) return <Loader/>

  return (
    <View className="flex-1 bg-sky-200 items-center justify-center">
        {/* <Loader/> */}
      <Text className="text-3xl font-bold mb-5">My Profile</Text>
      {userDetails&&<View className="border-2 p-5 rounded-lg bg-sky-100">
        {Object.entries(userDetails).map(([key,value])=>(
            <View className="mb-3">
            <Text>
                <Text className="font-bold">{key}:    </Text>{value}
                
            </Text>
            </View>
                
        ))}
      </View>}
    </View>
  )
}