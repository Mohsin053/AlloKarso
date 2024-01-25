import { createStackNavigator } from '@react-navigation/stack';

// onBoarding stack screens
import Page1 from '../PassengerApp/profilingScreen/OnboardingScreen/Page1';
import Page2 from '../PassengerApp/profilingScreen/OnboardingScreen/Page2';

const Stack = createStackNavigator();

export default function OnBoardingStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen name='Page1' component={Page1} />
			<Stack.Screen name='Page2' component={Page2} />
		</Stack.Navigator>
	);
}
