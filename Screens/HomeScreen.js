import { View, Text ,SafeAreaView, TouchableOpacity, Linking} from 'react-native'
import React, { useEffect,useState } from 'react'
// import open, { createOpenLink,createMapLink } from 'react-native-open-maps'

import axios from 'axios'
import Navbar from './Navbar'
import Loader from './Loader'

export default function HomeScreen({navigation}) {

  const[accidents,setAccidents]=useState([])
  const [loading,setLoading]=useState(false)

  const handleClick=async(lat,lon)=>{
    console.log("hello")
      // console.log(createMapLink({latitude:parseFloat(lat),longitude:parseFloat(lon)}))
    await Linking.openURL(`https://maps.google.com/?q=${lat},${lon}`)
  }
  const fun=()=>{
    console.log("Hello")
  }

  useEffect(()=>{
      const getData=async()=>{

        setLoading(true)
        const res=await axios.get("https://flex-api-rohiths-projects-b8dbb91a.vercel.app/api/accidents")
        setAccidents(res.data.res)
        // console.log(res.data)
        console.log(accidents)
        setLoading(false)
      }
      getData();
  },[])


  if(loading) return <Loader/>

  return (
    <SafeAreaView className="flex-1  items-center">
      {/* <Text className="bg-black text-white p-5 rounded-lg">HomeScreen</Text> */}
      <Navbar navigation={navigation}/>
      <Text className="text-3xl my-4 font-bold">Latest Accidents</Text>
      {accidents.map((accident)=>(
        <TouchableOpacity key={accident._id}  className="p-5 space-y-2  border-2 bg-slate-200 my-2 rounded-lg w-5/6 text-center">
          <Text ><Text className="font-bold">Person :</Text> {accident.email}</Text>
          <Text ><Text className="font-bold">Phone :</Text> {accident.phone}</Text>
          <Text ><Text className="font-bold">Emergency Contact : </Text>{accident.emergencyContact}</Text>
          <TouchableOpacity onPress={()=>handleClick(accident.latitude,accident.longitude)} className="w-2/3 m-auto"><Text className="text-white text-center bg-blue-400 p-3 ">Show in map</Text></TouchableOpacity>
        </TouchableOpacity>
      ))}
      {/* <Text onPress={()=>navigation.navigate("Device")}>hello</Text> */}
    </SafeAreaView>
  )
}