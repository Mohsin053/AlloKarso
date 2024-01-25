import { StyleSheet, Text, View } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function FreightOrderScreen({ navigation }) {
	return (
		<View
			style={{
				backgroundColor: 'black',
				width: '95%',
				alignSelf: 'center',
			}}>
			<TouchableOpacity
				style={{
					backgroundColor: '#333333',
					height: 170,
					borderRadius: 20,
					padding: 20,
					marginBottom: 20,
					justifyContent: 'space-between',
				}}>
				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						fontWeight: 'light',
						fontSize: 14,
					}}>
					Pending
				</Text>
				<Text
					style={{
						color: 'white',
						fontWeight: 'bold',
						fontSize: 20,
					}}>
					100 MAD for private ride
				</Text>
				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						fontWeight: 'light',
						fontSize: 12,
					}}>
					Tuesday 13 Feb, 9 AM
				</Text>
				<View style={{ flexDirection: 'row' }}>
					<Ionicons name={'location'} color={'#FF4C4C'} size={20} />
					<Text
						style={{
							color: 'rgba(255, 255, 255, 0.65)',
							fontWeight: 'light',
							fontSize: 14,
							marginLeft: 5,
						}}>
						PickUp
					</Text>
				</View>
				<View style={{ flexDirection: 'row' }}>
					<Ionicons name={'location'} color={'#00A76F'} size={20} />
					<Text
						style={{
							color: 'rgba(255, 255, 255, 0.65)',
							fontWeight: 'light',
							fontSize: 14,
							marginLeft: 5,
						}}>
						Destination
					</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({});
