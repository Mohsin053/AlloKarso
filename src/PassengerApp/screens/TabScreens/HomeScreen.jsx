import { useRef, useState } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import {
	ScrollView,
	FlatList,
	TouchableOpacity,
} from 'react-native-gesture-handler';

import economycar from '../../assets/img/economycar.png';
import Taxi from '../../assets/img/Car.png';
import scooter from '../../assets/img/scooter.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const data = [
	{ id: 0, title: 'Economy', image: economycar },
	{ id: 1, title: 'Taxi', image: Taxi },
	{ id: 2, title: 'Bike', image: scooter },
];

const HomeScreen = ({ navigation }) => {
	const bottomSheetRef = useRef(null);
	const [activeButton, setactiveButton] = useState(0);

	const handleactiveButtonPress = (a) => {
		setactiveButton(a);
	};

	return (
		<View style={styles.container}>
			<MapView
				provider={PROVIDER_GOOGLE}
				style={styles.map}
				region={{
					latitude: 37.78825,
					longitude: -122.4324,
					latitudeDelta: 0.015,
					longitudeDelta: 0.0121,
				}}
			/>
			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={['60%']}
				backgroundStyle={{
					borderRadius: 50,
					backgroundColor: '#17191B',
				}}>
				<ScrollView
					style={{ paddingHorizontal: 20 }}
					contentContainerStyle={{
						flexGrow: 1,
						justifyContent: 'space-between',
					}}>
					<View style={{ marginBottom: 5 }}>
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
											activeButton === item.id
												? 'white'
												: '#333333',
										borderRadius: 12,
										marginRight:
											item.id === data.length - 1
												? 0
												: 10,
									}}
									onPress={() =>
										handleactiveButtonPress(item.id)
									}>
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
								width: '100%',
							}}
							contentContainerStyle={{
								flexGrow: 1,
								justifyContent: 'space-between',
							}}
						/>
					</View>

					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							width: '100%',
							marginBottom: 5,
						}}
						onPress={() => navigation.navigate('SetLocation')}>
						<MaterialCommunityIcons
							name={'record-circle'}
							color={'#00A76F'}
							size={24}
							style={{
								width: '10%',
							}}
						/>
						<View
							style={{
								justifyContent: 'center',
								borderRadius: 12,
								backgroundColor: '#333333',
								paddingHorizontal: 15,
								height: 45,
								width: '90%',
							}}>
							<Text
								style={{
									color: 'rgba(255, 255, 255, 0.65)',
									fontWeight: 'light',
									fontSize: 12,
								}}>
								Pick up
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							width: '100%',
							marginBottom: 5,
						}}
						onPress={() => navigation.navigate('SetLocation')}>
						<MaterialCommunityIcons
							name={'record-circle'}
							color={'#FF4C4C'}
							size={24}
							style={{
								width: '10%',
							}}
						/>

						<View
							style={{
								justifyContent: 'center',
								borderRadius: 12,
								backgroundColor: '#333333',
								paddingHorizontal: 15,
								height: 45,
								width: '90%',
							}}>
							<Text
								style={{
									color: 'rgba(255, 255, 255, 0.65)',
									fontWeight: 'light',
									fontSize: 12,
								}}>
								Destination
							</Text>
						</View>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							width: '100%',
							marginBottom: 5,
						}}>
						<FontAwesome
							name={'dollar'}
							color={'white'}
							size={24}
							style={{
								width: '10%',
							}}
						/>
						<View
							style={{
								justifyContent: 'center',
								borderRadius: 12,
								backgroundColor: '#333333',
								paddingHorizontal: 15,
								height: 45,
								width: '90%',
							}}>
							<Text
								style={{
									color: 'rgba(255, 255, 255, 0.65)',
									fontWeight: 'light',
									fontSize: 12,
								}}>
								Offer our fare
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							width: '100%',
							marginBottom: 5,
						}}>
						<Ionicons
							name={'chatbubble'}
							color={'white'}
							size={24}
							style={{
								width: '10%',
							}}
						/>
						<View
							style={{
								justifyContent: 'center',
								borderRadius: 12,
								backgroundColor: '#333333',
								paddingHorizontal: 15,
								height: 45,
								width: '90%',
							}}>
							<Text
								style={{
									color: 'rgba(255, 255, 255, 0.65)',
									fontWeight: 'light',
									fontSize: 12,
								}}>
								Comments
							</Text>
						</View>
					</TouchableOpacity>

					<TouchableOpacity
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 12,
							backgroundColor: 'white',
							height: 50,
							marginBottom: 10,
						}}
						onPress={() =>
							navigation.navigate('RideRequestScreen')
						}>
						<Text
							style={{
								color: 'black',
								fontWeight: 'bold',
								fontSize: 12,
							}}>
							Choose on map
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</BottomSheet>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		flex: 1,
	},
	contentContainer: {
		flex: 1,
	},
});

export default HomeScreen;
