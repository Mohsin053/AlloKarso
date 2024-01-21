import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

//passenger bottom tab screens
import HomeScreen from './HomeScreen';
import CityToCityScreen from './CityToCityScreen';
import FreightScreen from './FreightScreen';
import PassengerWalletScreen from './PassengerWalletScreen';
import PassengerProfileScreen from './PassengerProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigatorPassenger() {
	return (
		<Tab.Navigator
			screenOptions={{
				tabBarStyle: {
					height: 60,
					backgroundColor: 'black',
				},
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: '#AAAAAA',
				tabBarLabelStyle: { fontSize: 12, paddingBottom: 5 },
			}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'home'} color={color} size={24} />
					),
				}}
			/>
			<Tab.Screen
				name='City to city'
				component={CityToCityScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'search'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Freight'
				component={FreightScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'search'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Wallet'
				component={PassengerWalletScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name={'newspaper'}
							color={color}
							size={size}
						/>
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
