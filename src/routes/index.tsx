import React from 'react';
import { RootStackParamsList } from '../RootStackParamsList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../pages/home/index';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function Routes(){
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="home"
				component={HomePage}
				options={{
					headerShown: false
				}
				}
			/>
		</Stack.Navigator>
	);
}

export { Routes };