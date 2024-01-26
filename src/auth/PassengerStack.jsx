import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView } from 'react-native';
const Stack = createStackNavigator();

import TabNavigatorPassenger from '../PassengerApp/screens/TabScreens/TabNavigatorPassenger';
import FindingDriver from '../PassengerApp/screens/SecondaryScreen/citytocitySubscreen/FindingDriver';
import UpdateProfileScreen from '../PassengerApp/screens/SecondaryScreen/ProfileSubScreen/UpdateProfileScreen';
import RideDetailsScreen from '../PassengerApp/screens/SecondaryScreen/ProfileSubScreen/RideDetailsScreen';
import RequestHistoryScreen from '../PassengerApp/screens/SecondaryScreen/ProfileSubScreen/RequestHistoryScreen';
import SettingScreen from '../PassengerApp/screens/SecondaryScreen/ProfileSubScreen/SettingScreen';
import Notifications from '../PassengerApp/screens/SecondaryScreen/HomeSubScreen/Notifications';
import SetLocation from '../PassengerApp/screens/SecondaryScreen/HomeSubScreen/SetLocation';
import ReviewScreen from '../PassengerApp/screens/SecondaryScreen/HomeSubScreen/ReviewScreen';
import RideRequestScreen from '../PassengerApp/screens/SecondaryScreen/HomeSubScreen/RideRequestScreen';
import WaitingScreen from '../PassengerApp/screens/SecondaryScreen/HomeSubScreen/WaitingScreen';

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
				<Stack.Screen name='FindingDriver' component={FindingDriver} />
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
				<Stack.Screen name='Notifications' component={Notifications} />
				<Stack.Screen name='SetLocation' component={SetLocation} />
				<Stack.Screen name='ReviewScreen' component={ReviewScreen} />
				<Stack.Screen
					name='RideRequestScreen'
					component={RideRequestScreen}
				/>
				<Stack.Screen name='WaitingScreen' component={WaitingScreen} />
			</Stack.Navigator>
		</KeyboardAvoidingView>
	);
}
