import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function homePage(){
	const [ count, setCount ] = useState(0);

	function increment(){
		setCount(count + 1);
	}

	function decrement(){
		setCount(count - 1);
		if(count <= 0){
			setCount(0);
		}
	}

	return(
		<View style={style.container}>
			<Text style={style.title}>Contador: { count }</Text>
			<View style={style.options}>
				<TouchableOpacity style={style.button} onPress={increment}>
					<Text style={style.buttonText}>Mais</Text>
				</TouchableOpacity>
				<TouchableOpacity style={style.button} onPress={decrement}>
					<Text style={style.buttonText}>Menos</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#212121'
	},
	title: {
		alignItems: 'center',
		justifyContent: 'center',
		color: '#ffffff',
		fontSize: 50
	},
	options: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: 250
	},
	button: {
		
		backgroundColor: 'darkviolet',
		padding: 10,
		borderRadius: 50,
	},
	buttonText: {
		alignItems: 'center',
		justifyContent: 'center',
		color: '#ffffff',
		fontSize: 15
	}
});