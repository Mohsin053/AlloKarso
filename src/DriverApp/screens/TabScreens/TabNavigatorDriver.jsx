import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//Driver bottom tab screens
import RideRequestScreen from './RideRequestScreen';
import DriverEarningScreen from './DriverEarningScreen';
import RatingScreen from './RatingScreen';
import DriverWalletScreen from './DriverWalletScreen';
import DriverProfileScreen from './DriverProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigatorPassenger() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					height: 60,
					backgroundColor: '#F5F5F5',
				},
				headerShown: false,
				tabBarActiveTintColor: '#FF8216',
				tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
			}}>
			<Tab.Screen
				name='Ride Requests'
				component={RideRequestScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'list'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Earnings'
				component={DriverEarningScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'cash'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Ratings'
				component={RatingScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'star'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Wallet'
				component={DriverWalletScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'wallet'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Profile'
				component={DriverProfileScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'person'} color={color} size={size} />
					),
				}}
			/>
		</Tab.Navigator>
	);
}
