import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView } from 'react-native';
const Stack = createStackNavigator();

// passenger stack screens
import TabNavigatorPassenger from '../PassengerApp/screens/TabScreens/TabNavigatorPassenger';
// city to city
import FindingCitytoCityDriver from '../PassengerApp/screens/SecondaryScreen/citytocitySubscreen/FindingCitytoCityDriver';
// freight
import FindingFreightDriver from '../PassengerApp/screens/SecondaryScreen/FreightSubScreen/FindingFreightDriver';
// profile home screen
import UpdateProfileScreen from '../PassengerApp/screens/SecondaryScreen/ProfileSubScreen/UpdateProfileScreen';
import RideDetailsScreen from '../PassengerApp/screens/SecondaryScreen/ProfileSubScreen/RideDetailsScreen';
import RequestHistoryScreen from '../PassengerApp/screens/SecondaryScreen/ProfileSubScreen/RequestHistoryScreen';
import SettingScreen from '../PassengerApp/screens/SecondaryScreen/ProfileSubScreen/SettingScreen';
export default function PassengerStack() {
	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			style={{ flex: 1 }}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				<Stack.Screen
					name='TabNavigatorPassenger'
					component={TabNavigatorPassenger}
				/>
				<Stack.Screen
					name='FindingCitytoCityDriver'
					component={FindingCitytoCityDriver}
				/>
				<Stack.Screen
					name='FindingFreightDriver'
					component={FindingFreightDriver}
				/>
				<Stack.Screen
					name='UpdateProfileScreen'
					component={UpdateProfileScreen}
				/>
				<Stack.Screen
					name='RideDetailsScreen'
					component={RideDetailsScreen}
				/>
				<Stack.Screen
					name='RequestHistoryScreen'
					component={RequestHistoryScreen}
				/>
				<Stack.Screen name='SettingScreen' component={SettingScreen} />
			</Stack.Navigator>
		</KeyboardAvoidingView>
	);
}
