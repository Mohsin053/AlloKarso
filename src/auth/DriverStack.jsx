import { createStackNavigator } from '@react-navigation/stack';

// Driver stack screens
import TabNavigatorDriver from '../DriverApp/screens/TabScreens/TabNavigatorDriver';

const Stack = createStackNavigator();

export default function DriverStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='TabNavigatorDriver'
				component={TabNavigatorDriver}
			/>
		</Stack.Navigator>
	);
}
