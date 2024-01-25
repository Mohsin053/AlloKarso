import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
					borderTopColor: '#333333',
					borderTopWidth: 1,
				},
				headerShown: false,
				tabBarActiveTintColor: 'white',
				tabBarInactiveTintColor: '#AAAAAA',
				tabBarLabelStyle: { fontSize: 10, paddingBottom: 10 },
			}}>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'home'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='City to city'
				component={CityToCityScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'business'} color={color} size={size} />
					),
				}}
			/>
			<Tab.Screen
				name='Freight'
				component={FreightScreen}
				options={{
					tabBarIcon: ({ color, size }) => (
						<MaterialCommunityIcons
							name={'truck'}
							color={color}
							size={30}
						/>
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
