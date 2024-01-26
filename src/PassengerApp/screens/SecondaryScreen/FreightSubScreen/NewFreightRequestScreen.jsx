import { StyleSheet, Text, View, Image } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import economycar from '../../../assets/img/truck1.png';

import Ionicons from 'react-native-vector-icons/Ionicons';

export default function NewFreightRequestScreen({ navigation }) {
	return (
		<View
			style={{
				backgroundColor: 'black',
				width: '90%',
				alignSelf: 'center',
			}}>
			<Text
				style={{
					color: 'white',
					fontWeight: 'normal',
					fontSize: 14,
					textAlign: 'center',
					marginBottom: 20,
				}}>
				Transport goods between cities with ease, reliability, and on
				your terms.
			</Text>

			<View
				style={{
					height: 70,
					width: 100,
					backgroundColor: 'white',
					marginBottom: 20,
					borderRadius: 12,
					alignSelf: 'center',
				}}>
				<Image
					source={economycar}
					style={{
						height: 45,
						width: 100,
						resizeMode: 'center',
					}}
				/>
				<Text
					style={{
						color: 'black',

						fontWeight: 'bold',
						fontSize: 14,
						marginHorizontal: 10,
					}}>
					Freight
				</Text>
			</View>

			<TouchableOpacity
				style={{
					backgroundColor: '#333333',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					flexDirection: 'row',
					padding: 10,
					justifyContent: 'space-between',
					marginBottom: 20,
				}}>
				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						fontWeight: 'light',
						fontSize: 12,
					}}>
					Pick up
				</Text>
				<Ionicons
					name={'chevron-forward'}
					color={'rgba(255, 255, 255, 0.65)'}
					size={20}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					backgroundColor: '#333333',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					flexDirection: 'row',
					padding: 10,
					justifyContent: 'space-between',
					marginBottom: 20,
				}}>
				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						fontWeight: 'light',
						fontSize: 12,
					}}>
					Destination
				</Text>
				<Ionicons
					name={'chevron-forward'}
					color={'rgba(255, 255, 255, 0.65)'}
					size={20}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					backgroundColor: '#333333',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					flexDirection: 'row',
					padding: 10,
					justifyContent: 'space-between',
					marginBottom: 20,
				}}>
				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						fontWeight: 'light',
						fontSize: 12,
					}}>
					Date and Time
				</Text>
				<Ionicons
					name={'chevron-forward'}
					color={'rgba(255, 255, 255, 0.65)'}
					size={20}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					backgroundColor: '#333333',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					flexDirection: 'row',
					padding: 10,
					justifyContent: 'space-between',
					marginBottom: 20,
				}}>
				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						fontWeight: 'light',
						fontSize: 12,
					}}>
					Description of Cargo
				</Text>
				<Ionicons
					name={'chevron-forward'}
					color={'rgba(255, 255, 255, 0.65)'}
					size={20}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					backgroundColor: '#333333',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					flexDirection: 'row',
					padding: 10,
					justifyContent: 'space-between',
					marginBottom: 20,
				}}>
				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						fontWeight: 'light',
						fontSize: 12,
					}}>
					Vehicle Size
				</Text>
				<Ionicons
					name={'chevron-forward'}
					color={'rgba(255, 255, 255, 0.65)'}
					size={20}
				/>
			</TouchableOpacity>
			<TouchableOpacity
				style={{
					backgroundColor: '#333333',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					flexDirection: 'row',
					padding: 10,
					justifyContent: 'space-between',
					marginBottom: 20,
				}}>
				<Text
					style={{
						color: 'rgba(255, 255, 255, 0.65)',
						fontWeight: 'light',
						fontSize: 12,
					}}>
					Offer your fare
				</Text>
				<Ionicons
					name={'chevron-forward'}
					color={'rgba(255, 255, 255, 0.65)'}
					size={20}
				/>
			</TouchableOpacity>

			<TouchableOpacity
				style={{
					backgroundColor: 'white',
					height: 50,
					borderRadius: 12,
					alignItems: 'center',
					padding: 10,
					justifyContent: 'center',
					marginBottom: 50,
				}}
				onPress={() => navigation.navigate('FindingDriver')}>
				<Text
					style={{
						color: 'black',
						fontWeight: 'bold',
						fontSize: 14,
					}}>
					Find a Driver
				</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({});
