import { SafeAreaView, StatusBar, useColorScheme } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import AppNav from './auth/AppNav';
import { store } from './redux/store';
import { Provider } from 'react-redux';

function App() {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
	};

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
