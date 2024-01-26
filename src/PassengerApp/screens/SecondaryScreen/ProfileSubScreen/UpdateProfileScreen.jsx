import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AvatarImg from '../../../assets/img/img1.png';
import { Avatar } from '@rneui/themed';
import FlagIcon from '../../../components/loginComponents/FlagIcon';

import SecondaryScreenTopBar from '../../../components/MutualComponents/SecondaryScreenTopBar';

export default function UpdateProfileScreen({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<SecondaryScreenTopBar
				navigation={navigation}
				title={'Update Profile'}
			/>

			<Avatar
				size={130}
				rounded
				source={AvatarImg}
				imageProps={{}}
				containerStyle={{
					borderColor: 'white',
					borderWidth: 2,
					marginVertical: 30,
					alignSelf: 'center',
				}}
			/>

			<View
				style={{ marginBottom: 10, width: '90%', alignSelf: 'center' }}>
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

			<View
				style={{ marginBottom: 10, alignSelf: 'center', width: '90%' }}>
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

			<View
				style={{ marginBottom: 10, width: '90%', alignSelf: 'center' }}>
				<Text
					style={{
						fontSize: 12,
						color: 'white',
						marginBottom: 10,
					}}>
					City
				</Text>
				<TextInput
					style={styles.textInput}
					placeholder='Enter your City'
					placeholderTextColor={'rgba(255, 255, 255, 0.65)'}
					returnKeyType='done'
					maxLength={100}
				/>
			</View>

			<View
				style={{ marginBottom: 10, width: '90%', alignSelf: 'center' }}>
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

			<TouchableOpacity
				style={{
					backgroundColor: 'white',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					padding: 10,
					justifyContent: 'center',
					marginVertical: 30,
					width: '90%',
					alignSelf: 'center',
				}}>
				<Text
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 14,
					}}>
					Save
				</Text>
			</TouchableOpacity>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	textInput: {
		color: 'white',
		borderRadius: 12,
		backgroundColor: '#333333',
		paddingHorizontal: 15,
		height: 45,
		fontSize: 12,
	},
});
