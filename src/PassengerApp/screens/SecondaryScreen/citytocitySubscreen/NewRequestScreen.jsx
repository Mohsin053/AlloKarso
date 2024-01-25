import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import economycar from '../../../assets/img/economycar.png';
import Taxi from '../../../assets/img/Car.png';
import scooter from '../../../assets/img/scooter.png';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [
	{ id: 0, title: 'Economy', image: economycar },
	{ id: 1, title: 'Taxi', image: Taxi },
	{ id: 2, title: 'Bike', image: scooter },
];

export default function NewRequestScreen({ navigation }) {
	const [activeButton, setactiveButton] = useState(0);
	const handleactiveButtonPress = (a) => {
		setactiveButton(a);
	};
	const handleButtonPress = (a) => {
		navigation.navigate('FindingCitytoCityDriver');
	};
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
				Effortlessly journey between cities for business or leisure
			</Text>

			<Text
				style={{
					color: 'white',
					fontWeight: 'bold',
					fontSize: 14,
					marginBottom: 20,
				}}>
				Choose a ride
			</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={data}
				keyExtractor={(item) => item.id.toString()}
				renderItem={({ item }) => (
					<TouchableOpacity
						style={{
							height: 70,
							width: 100,
							backgroundColor:
								activeButton === item.id ? 'white' : '#333333',
							borderRadius: 12,
							marginRight: 10,
						}}
						onPress={() => handleactiveButtonPress(item.id)}>
						<Image
							source={item.image}
							style={{
								height: item.id === 2 ? 50 : 45,
								width: 100,
								resizeMode: 'center',
							}}
						/>
						<Text
							style={{
								color:
									activeButton === item.id
										? 'black'
										: 'white',
								fontWeight: 'bold',
								fontSize: 14,
								marginHorizontal: 10,
								top: item.id === 2 ? -5 : 0,
							}}>
							{item.title}
						</Text>
					</TouchableOpacity>
				)}
				style={{
					marginBottom: 20,
				}}
			/>

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
					Number of Passengers
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
					comments
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
				onPress={handleButtonPress}>
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
