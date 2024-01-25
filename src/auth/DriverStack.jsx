import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView } from 'react-native';

// Driver stack screens
import TabNavigatorDriver from '../DriverApp/screens/TabScreens/TabNavigatorDriver';

const Stack = createStackNavigator();

export default function DriverStack() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='TabNavigatorDriver'
					component={TabNavigatorDriver}
				/>
			</Stack.Navigator>
		</KeyboardAvoidingView>
	);
}
