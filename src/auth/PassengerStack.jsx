import { createStackNavigator } from '@react-navigation/stack';

// passenger stack screens
import TabNavigatorPassenger from '../PassengerApp/screens/TabScreens/TabNavigatorPassenger';

const Stack = createStackNavigator();

export default function PassengerStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }}>
			<Stack.Screen
				name='TabNavigatorPassenger'
				component={TabNavigatorPassenger}
			/>
		</Stack.Navigator>
	);
}
