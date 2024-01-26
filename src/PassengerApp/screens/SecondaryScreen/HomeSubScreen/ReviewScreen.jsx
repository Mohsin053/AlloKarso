import { StyleSheet, Text, View, ScrollView, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AvatarImg from '../../../assets/img/img1.png';
import { Avatar } from '@rneui/themed';

export default function ReviewScreen({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<Avatar
				size={130}
				rounded
				source={AvatarImg}
				containerStyle={{
					borderColor: 'white',
					borderWidth: 2,
					marginTop: 50,
					marginBottom: 20,
					alignSelf: 'center',
				}}
			/>

			<Text
				style={{
					color: 'white',
					fontWeight: 'bold',
					fontSize: 16,
					textAlign: 'center',
					marginBottom: 5,
				}}>
				john Doe
			</Text>
			<Text
				style={{
					color: 'white',
					fontWeight: 'light',
					fontSize: 14,
					textAlign: 'center',
					marginBottom: 20,
				}}>
				How was your ride?
			</Text>

			<View style={{ width: '90%', alignSelf: 'center' }}>
				<TextInput
					style={styles.textInput}
					placeholder='Enter your name'
					placeholderTextColor={'rgba(255, 255, 255, 0.65)'}
					returnKeyType='done'
					maxLength={100}
				/>
			</View>

			<TouchableOpacity
				style={{
					backgroundColor: 'white',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					padding: 10,
					justifyContent: 'center',
					marginVertical: 20,
					width: '90%',
					alignSelf: 'center',
				}}>
				<Text
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 14,
					}}>
					Submit
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
