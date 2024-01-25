import { useEffect, useRef, useState } from 'react';
import {
	StyleSheet,
	Text,
	TextInput,
	View,
	Keyboard,
	Pressable,
	Image,
} from 'react-native';
import { windowWidth, windowHeight } from '../../../utils/deviceUtil';
import { ScrollView } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from '@gorhom/bottom-sheet';

export default function EmailCodeVerify({ navigation, route }) {
	const { email } = route.params;
	const [inputValues, setInputValues] = useState(Array(4).fill(''));
	const inputRefs = useRef([]);
	const [getCodeDisabled, setGetCodeDisabled] = useState(true);
	const [codeError, setCodeError] = useState(false);
	const [countdown, setCountdown] = useState(30);

	useEffect(() => {
		inputRefs.current[0]?.focus();
	}, []);

	useEffect(() => {
		const interval = setInterval(() => {
			if (countdown > 0) {
				setCountdown(countdown - 1);
			} else {
				clearInterval(interval);
				setCountdown(30); // Reset countdown to 30 seconds
			}
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, [countdown]);

	const formatTime = (timeInSeconds) => {
		const minutes = Math.floor(timeInSeconds / 60);
		const seconds = timeInSeconds % 60;
		return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
	};

	const handleInputChange = (index, value) => {
		setCodeError(false);
		const updatedValues = [...inputValues];
		updatedValues[index] = value;

		// Updates the Focus on Inputs
		if (value.length === 1 && index < 3) {
			inputRefs.current[index + 1]?.focus();
		} else if (value.length === 0 && index > 0) {
			inputRefs.current[index - 1]?.focus();
		}
		setInputValues(updatedValues);

		if (updatedValues.join('').length < 4) {
			return setGetCodeDisabled(true);
		}
		setGetCodeDisabled(false);
	};

	const handleVerify = async () => {
		navigation.navigate('WelcomePage');
	};

	const handleResendCode = async () => {};

	return (
		<ScrollView style={styles.mainView}>
			<View style={styles.upperTab}>
				<Pressable
					hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
					style={({ pressed }) => [
						{
							width: 40,
							height: 40,
							borderRadius: 20,
							alignItems: 'center',
							justifyContent: 'center',
							padding: 5,
							marginHorizontal: 5,
						},
						pressed && { backgroundColor: 'gray' },
					]}
					onPress={() => {
						navigation.goBack();
					}}>
					<Ionicons name={'chevron-back'} color={'white'} size={24} />
				</Pressable>
			</View>
			<Image
				source={require('../../assets/img/letterbox.png')}
				style={{
					width: 150,
					height: 150,
					alignSelf: 'center',
				}}
				contentFit='contain'
			/>
			<View style={styles.inputCard}>
				{/* Main text */}

				<Text style={styles.mainText}>Check your email</Text>

				<Text
					style={{
						color: 'white',
						textAlign: 'center',
						fontSize: 14,
					}}>
					We sent a verification code to
				</Text>

				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						textAlign: 'center',
						fontSize: 14,
					}}>
					{email}
				</Text>

				{/* Code Input */}
				<View style={styles.codeInputContainer}>
					{[...Array(4)].map((_, index) => (
						<TextInput
							key={index}
							ref={(ref) => (inputRefs.current[index] = ref)}
							keyboardType='number-pad'
							returnKeyType='done'
							maxLength={1}
							placeholder='0'
							placeholderTextColor={'rgba(255, 255, 255, 0.65)'}
							style={{
								...styles.codeInput,
								borderColor: codeError ? '#FF0000' : 'white',
							}}
							onChangeText={(value) =>
								handleInputChange(index, value)
							}
						/>
					))}
				</View>
				<Text style={styles.timeText}>{formatTime(countdown)}</Text>

				<View style={styles.resendView}>
					<Text style={styles.infoText}>Didn't get the code?</Text>
					<TouchableOpacity>
						<Text style={styles.resendText}>Resend</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity style={styles.button} onPress={handleVerify}>
					<Text style={styles.buttonText}>Verify Email</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	mainView: {
		flex: 1,
		backgroundColor: 'black',
	},
	upperTab: {
		height: 50,
		flexDirection: 'row',
		width: '100%',
		alignItems: 'center',
	},
	inputCard: {
		backgroundColor: '#333333',
		borderRadius: 15,
		width: '90%',
		marginVertical: 50,
		alignSelf: 'center',
		padding: 20,
		height: 330,
		justifyContent: 'space-between',
	},
	mainText: {
		color: 'white',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center',
	},
	codeErrorText: {
		color: 'red',
		textAlign: 'center',
		marginVertical: 12,
	},
	timeText: {
		fontSize: 14,
		fontWeight: 'bold',
		color: 'white',
		textAlign: 'center',
	},
	button: {
		borderRadius: 12,
		height: 50,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
		paddingHorizontal: 16,
		paddingVertical: 12,
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	resendText: {
		marginLeft: 5,
		fontSize: 12,
		color: 'rgba(255, 255, 255, 0.65)',
		fontWeight: 'bold',
	},
	resendView: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'center',
	},
	infoText: { fontSize: 12, color: 'white' },
	pressedStyle: {
		opacity: 0.6,
	},
	codeInputContainer: {
		flexDirection: 'row',
		width: '100%',
		gap: 8,
	},
	codeInput: {
		flex: 1,
		height: windowWidth / 4 - 24,
		width: windowWidth / 4 - 24,
		backgroundColor: 'black',
		padding: 1,
		borderWidth: 1,
		borderRadius: 15,
		fontSize: 48,
		textAlign: 'center',
		color: 'white',
	},
});
