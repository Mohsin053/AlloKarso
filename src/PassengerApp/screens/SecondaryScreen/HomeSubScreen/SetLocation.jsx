import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SecondaryScreenTopBar from '../../../components/MutualComponents/SecondaryScreenTopBar';

export default function SetLocation({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<SecondaryScreenTopBar
				navigation={navigation}
				title={'Set Location'}
			/>

			<View
				style={{
					width: '90%',
					alignSelf: 'center',
					marginVertical: 20,
				}}>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
					<Ionicons
						name={'location-outline'}
						color={'white'}
						size={24}
						style={{ marginRight: 10 }}
					/>
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

				<TouchableOpacity
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						marginVertical: 20,
					}}>
					<Ionicons
						name={'location-outline'}
						color={'white'}
						size={24}
						style={{ marginRight: 10 }}
					/>
					<Text
						style={{
							color: 'white',
							fontWeight: 'light',
							fontSize: 12,
						}}>
						Choose on map
					</Text>
				</TouchableOpacity>
			</View>
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
		flex: 1,
	},
});
