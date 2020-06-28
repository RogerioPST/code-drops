import React from 'react'
import {Text,  View } from "react-native"
import {Camera as ExpoCamera} from 'expo-camera'

const Camera : React.FC = () =>{
	return (
	<View style={{flex:1}}>
		<Text>Camera</Text>
		<ExpoCamera style={{flex: 1}} />
	</View>
	)
}

export default Camera