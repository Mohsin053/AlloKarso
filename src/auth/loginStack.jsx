import { createStackNavigator } from '@react-navigation/stack';

// login stack screens
import LoginEmailScreen from '../PassengerApp/profilingScreen/LoginScreen/LoginEmailScreen';
import OtpConfirmScreen from '../PassengerApp/profilingScreen/LoginScreen/OtpConfirmScreen';

const Stack = createStackNavigator();

export default function LoginStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='LoginEmailScreen'
				component={LoginEmailScreen}
			/>
			<Stack.Screen
				name='OtpConfirmScreen'
				component={OtpConfirmScreen}
			/>
		</Stack.Navigator>
	);
}
