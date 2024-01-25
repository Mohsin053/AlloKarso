import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView } from 'react-native';

// login stack screens
import LoginEmailScreen from '../PassengerApp/profilingScreen/LoginScreen/LoginEmailScreen';
import OtpConfirmScreen from '../PassengerApp/profilingScreen/LoginScreen/OtpConfirmScreen';
import WelcomePage from '../PassengerApp/profilingScreen/LoginScreen/WelcomePage';

const Stack = createStackNavigator();

export default function LoginStack() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='LoginEmailScreen'
					component={LoginEmailScreen}
				/>
				<Stack.Screen
					name='OtpConfirmScreen'
					component={OtpConfirmScreen}
				/>
				<Stack.Screen name='WelcomePage' component={WelcomePage} />
			</Stack.Navigator>
		</KeyboardAvoidingView>
	);
}
