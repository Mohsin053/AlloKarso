import { NavigationContainer } from '@react-navigation/native';

// stack imports
import LoginStack from './LoginStack';
import DriverStack from './DriverStack';
import PassengerStack from './PassengerStack';
import OnBoardingStack from './OnBoardingStack';

export default function AppNav() {
	return (
		<>
			<NavigationContainer>
				<PassengerStack />
			</NavigationContainer>
		</>
	);
}
