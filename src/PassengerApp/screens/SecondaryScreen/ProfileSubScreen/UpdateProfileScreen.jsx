import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	Image,
	TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Applogo from '../../../assets/img/cropped.png';
import AvatarImg from '../../../assets/img/img1.png';
import { Avatar } from '@rneui/themed';
import { CheckBox, Icon } from 'react-native-elements';
import FlagIcon from '../../../components/loginComponents/FlagIcon';

export default function UpdateProfileScreen({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<View
				style={{
					height: 60,
					justifyContent: 'space-between',
					backgroundColor: '#17191B',
					borderBottomColor: '#333333',
					borderBottomWidth: 1,
					flexDirection: 'row',
					alignItems: 'center',
				}}>
				<Pressable
					onPress={() => navigation.goBack()}
					hitSlop={{ top: 20, bottom: 20, left: 40, right: 40 }}
					style={({ pressed }) => [
						{
							borderRadius: 20,
							alignItems: 'center',
							justifyContent: 'center',
							padding: 5,
							marginHorizontal: 5,
						},
						pressed && { backgroundColor: 'gray' },
					]}>
					<Ionicons
						name={'chevron-back'}
						color={'rgba(255, 255, 255, 0.65)'}
						size={25}
					/>
				</Pressable>

				<Text
					style={{
						color: 'white',
						fontWeight: 'bold',
						textAlign: 'center',
						fontSize: 16,
					}}>
					Update Profile
				</Text>
				<Ionicons
					name={'chevron-back'}
					color={'transparent'}
					size={20}
				/>
			</View>

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
