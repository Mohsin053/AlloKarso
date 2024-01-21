import { NavigationContainer } from '@react-navigation/native';

// stack imports
import LoginStack from './LoginStack';
import DriverStack from './DriverStack';
import PassengerStack from './PassengerStack';

export default function AppNav() {
	return (
		<>
			<NavigationContainer>
				<PassengerStack />
			</NavigationContainer>
		</>
	);
}
