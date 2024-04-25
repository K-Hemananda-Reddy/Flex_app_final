import { View, Text, Image } from 'react-native'
import React from 'react'

export default function Loader() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image className="h-12 w-12" source={require("../assets/loader.gif")}/>
    </View>
  )
}