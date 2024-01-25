import { useEffect, useRef, useState } from 'react';
import {
	Text,
	TextInput,
	View,
	StyleSheet,
	TouchableOpacity,
	Image,
} from 'react-native';
import logoimg from '../../assets/img/Appicon.jpeg';
import { validateEmail } from '../../../utils/validateUtil';
import {
	GestureHandlerRootView,
	ScrollView,
} from 'react-native-gesture-handler';
import { CheckBox, Icon } from 'react-native-elements';

import TermsModal from '../../components/loginComponents/TermsModal';
import FlagIcon from '../../components/loginComponents/FlagIcon';

export default function LoginEmailScreen({ navigation }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [buttonDisabled, setButtonDisabled] = useState(true);
	const [isChecked, setIsChecked] = useState(false);
	const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);

	// bottom sheet modal
	const bottomSheetModalRef = useRef(null);

	const handleOpenTermsModal = () => {
		bottomSheetModalRef.current?.present();
		setIsTermsModalOpen(true);
	};

	const handleCloseTermsModal = () => {
		setIsTermsModalOpen(false);
	};

	const handleGetCodePress = async () => {
		console.log('hi button pressed');
		navigation.navigate('OtpConfirmScreen', {
			email: 'Allokarso@gmail.com',
		});
	};

	return (
		<GestureHandlerRootView style={{ flex: 1, backgroundColor: 'black' }}>
			<ScrollView style={styles.container}>
				{/* Image and SubText */}

				<Image source={logoimg} style={styles.img} />

				<Text
					style={{
						fontSize: 33,
						color: 'white',
						marginBottom: 10,
					}}>
					Create a new Account
				</Text>
				<Text
					style={{
						fontSize: 12,
						color: 'rgba(255, 255, 255, 0.65)',
						marginBottom: 20,
					}}>
					Please put your information below to create a new account
					for using this app.
				</Text>

				<View style={{ marginBottom: 10 }}>
					<Text
						style={{
							fontSize: 12,
							color: 'white',
							marginBottom: 10,
						}}>
						Name
					</Text>
					<TextInput
						style={styles.textInput}
						placeholder='Enter your name'
						placeholderTextColor={'rgba(255, 255, 255, 0.65)'}
						returnKeyType='done'
						maxLength={100}
					/>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text
						style={{
							fontSize: 12,
							color: 'white',
							marginBottom: 10,
						}}>
						Email
					</Text>
					<TextInput
						style={styles.textInput}
						placeholder='Enter your email address'
						placeholderTextColor={'rgba(255, 255, 255, 0.65)'}
						keyboardType='email-address'
						returnKeyType='done'
						inputMode='email'
						maxLength={100}
					/>
				</View>

				<View style={{ marginBottom: 10 }}>
					<Text
						style={{
							fontSize: 12,
							color: 'white',
							marginBottom: 10,
						}}>
						Phone Number
					</Text>
					<View
						style={{
							flexDirection: 'row',
							backgroundColor: '#333333',
							borderRadius: 12,
						}}>
						<View
							style={{
								borderRadius: 12,
								height: 45,
								width: '20%',
								alignItems: 'center',
								backgroundColor: '#333333',
							}}>
							<FlagIcon />
						</View>
						<TextInput
							keyboardType='number-pad'
							returnKeyType='done'
							placeholder='+212 YXX XX XX XX'
							maxLength={9}
							placeholderTextColor={'rgba(255, 255, 255, 0.65)'}
							style={[styles.textInput, { width: '80%' }]}
						/>
					</View>
				</View>

				<View
					style={{
						marginBottom: 20,
						alignItems: 'center',
						flexDirection: 'row',
					}}>
					<CheckBox
						center
						checkedIcon={
							<Icon
								name='radio-button-checked'
								type='material'
								color='white'
								size={25}
								iconStyle={{ marginRight: 10 }}
							/>
						}
						uncheckedIcon={
							<Icon
								name='radio-button-unchecked'
								type='material'
								color='rgba(255, 255, 255, 0.65)'
								size={25}
								iconStyle={{ marginRight: 10 }}
							/>
						}
						checked={isChecked}
						onPress={() => setIsChecked(!isChecked)}
						containerStyle={{
							margin: 0,
							marginLeft: 0,
							marginRight: 0,
							padding: 0,
						}}
					/>
					<TouchableOpacity onPress={handleOpenTermsModal}>
						<Text
							style={{
								color: 'rgba(255, 255, 255, 0.65)',
								fontSize: 12,
							}}>
							Terms & Conditions
						</Text>
					</TouchableOpacity>
				</View>

				<TouchableOpacity
					style={styles.button}
					onPress={handleGetCodePress}>
					<Text style={styles.buttonText}>Get code</Text>
				</TouchableOpacity>
			</ScrollView>

			{/*bottom sheet modal */}
			<TermsModal
				isOpen={isTermsModalOpen}
				onClose={handleCloseTermsModal}
				bottomSheetModalRef={bottomSheetModalRef}
			/>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
	},
	img: {
		height: 130,
		width: 130,
		alignSelf: 'center',
	},
	textInput: {
		color: 'white',
		borderRadius: 12,
		backgroundColor: '#333333',
		paddingHorizontal: 15,
		height: 45,
		fontSize: 12,
	},
	button: {
		borderRadius: 12,
		height: 50,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 30,
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
	},
	countryFlag: {
		height: 100,
		width: 100,
		borderRadius: 20,
		backgroundColor: 'transparent',
	},
});
