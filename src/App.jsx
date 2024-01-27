import { useEffect } from 'react';
import {
	SafeAreaView,
	StatusBar,
	useColorScheme,
	PermissionsAndroid,
	Platform,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppNav from './auth/AppNav';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
navigator.geolocation = require('@react-native-community/geolocation');

function App() {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

	const androidPermission = async () => {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: 'Location Permission',
					message: 'Allo Karso needs access to your Location',
					buttonNeutral: 'Ask Me Later',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				}
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				console.log('You can use the Location');
			} else {
				console.log('Location permission denied');
			}
		} catch (err) {
			console.warn(err);
		}
	};

	useEffect(() => {
		if (Platform.OS === 'android') {
			androidPermission();
		} else {
			// IOS
			Geolocation.requestAuthorization();
		}
	}, []);

	return (
		<Provider store={store}>
			<SafeAreaView style={[backgroundStyle, { flex: 1 }]}>
				<StatusBar
					barStyle={isDarkMode ? 'light-content' : 'dark-content'}
					backgroundColor={backgroundStyle.backgroundColor}
				/>
				<AppNav />
			</SafeAreaView>
		</Provider>
	);
}

export default App;
