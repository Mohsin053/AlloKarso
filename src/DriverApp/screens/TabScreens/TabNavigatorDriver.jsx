import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Driver bottom tab screens
import RideRequestScreen from './RideRequestScreen';
import DriverEarningScreen from './DriverEarningScreen';
import RatingScreen from './RatingScreen';
import DriverWalletScreen from './DriverWalletScreen';
import DriverProfileScreen from './DriverProfileScreen';
import PassengerProfileScreen from '../../../PassengerApp/screens/TabScreens/PassengerProfileScreen';
import PassengerWalletScreen from '../../../PassengerApp/screens/TabScreens/PassengerWalletScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigatorPassenger() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					height: 60,
					backgroundColor: 'black',
					borderTopColor: '#333333',
					borderTopWidth: 1,
				},
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: '#AAAAAA',
				tabBarLabelStyle: { fontSize: 10, paddingBottom: 10 },
			}}>
			<Tab.Screen
				name='Ride request'
				component={RideRequestScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'list'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Earning'
				component={DriverEarningScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'cash'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Rating'
				component={RatingScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'star'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Wallet'
				component={PassengerWalletScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'wallet'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={PassengerProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'person'} color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
