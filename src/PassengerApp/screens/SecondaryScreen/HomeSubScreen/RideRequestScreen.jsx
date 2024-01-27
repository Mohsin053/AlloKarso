import { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import {
	ScrollView,
	FlatList,
	TouchableOpacity,
} from 'react-native-gesture-handler';
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0';

import economycar from '../../../assets/img/economycar.png';
import Taxi from '../../../assets/img/Car.png';
import scooter from '../../../assets/img/scooter.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
	selectOrigin,
	selectDestination,
	selectTravelTimeInformation,
	setRideType,
	setTravelTimeInformation,
} from '../../../../utils/navSlice';
import { useSelector } from 'react-redux';
const data = [
	{ id: 0, title: 'Economy', image: economycar },
	{ id: 1, title: 'Taxi', image: Taxi },
	{ id: 2, title: 'Bike', image: scooter },
];

const RideRequestScreen = ({ navigation }) => {
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);
	const bottomSheetRef = useRef(null);
	const mapRef = useRef(null);
	const [activeButton, setactiveButton] = useState(0);
	useEffect(() => {
		if (!origin || !destination == null) return;

		var i = setInterval(() => {
			mapRef?.current?.fitToSuppliedMarkers(['origin', 'destination'], {
				edgePadding: {
					top: 100,
					right: 100,
					left: 100,
					bottom: 100,
					animated: true,
				},
			});
			clearInterval(i);
		}, 50);
	}, [origin, destination]);

	const handleactiveButtonPress = (a) => {
		setactiveButton(a);
	};

	return (
		<View style={styles.container}>
			<View
				style={{
					height: '50%',
					flex: 1,
				}}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{
						height: '50%',
					}}
					showsUserLocation={origin && destination ? false : true}
					showsCompass={false}
					region={{
						latitude: origin.location.lat || 28.456312,
						longitude: origin.location.lng || -16.252929,
						latitudeDelta: 0.001,
						longitudeDelta: 0.01,
					}}
					maxZoomLevel={1000}
					ref={mapRef}>
					{origin && destination && (
						<>
							<Marker
								coordinate={{
									latitude: origin.location.lat,
									longitude: origin.location.lng,
								}}
								description={destination.description}
								identifier='origin'
							/>
							<MapViewDirections
								origin={{
									latitude: origin.location.lat,
									longitude: origin.location.lng,
								}}
								destination={{
									latitude: destination.location.lat,
									longitude: destination.location.lng,
								}}
								apikey={GOOGLE_MAPS_APIKEY}
								strokeWidth={5}
								strokeColor='blue'
								dis
							/>
							<Marker
								coordinate={{
									latitude: destination.location.lat,
									longitude: destination.location.lng,
								}}
								description={destination.description}
								identifier='destination'
							/>
						</>
					)}
				</MapView>
			</View>
			<BottomSheet
				ref={bottomSheetRef}
				snapPoints={['50%']}
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
					<View
						style={{
							backgroundColor: '#333333',
							borderRadius: 12,
							padding: 10,
							marginBottom: 10,
						}}>
						<View
							style={{
								height: 60,
								borderRadius: 12,
								alignSelf: 'center',
							}}>
							<Image
								source={data[1].image}
								style={{
									height: 40,
									resizeMode: 'center',
								}}
							/>
							<Text
								style={{
									color: 'white',
									fontWeight: 'bold',
									fontSize: 12,
									textAlign: 'center',
								}}>
								{data[1].title}
							</Text>
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								width: '100%',
							}}>
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
						</View>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								width: '100%',
							}}>
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
						</View>
					</View>
					<Text
						style={{
							color: 'white',
							fontWeight: 'bold',
							fontSize: 16,
							textAlign: 'center',
							marginBottom: 10,
						}}>
						Current Fare
					</Text>
					<View
						style={{
							alignItems: 'center',
							marginBottom: 10,
							justifyContent: 'space-between',
							flexDirection: 'row',
							width: '100%',
						}}>
						<TouchableOpacity
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 12,
								backgroundColor: '#333333',
								height: 50,
								width: 60,
							}}>
							<Text
								style={{
									color: 'white',
									fontWeight: 'bold',
									fontSize: 12,
								}}>
								-1
							</Text>
						</TouchableOpacity>
						<View>
							<Text
								style={{
									color: 'white',
									fontWeight: 'bold',
									fontSize: 16,
								}}>
								10 MAD
							</Text>
						</View>

						<TouchableOpacity
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 12,
								backgroundColor: 'white',
								height: 50,
								width: 60,
							}}>
							<Text
								style={{
									color: 'black',
									fontWeight: 'bold',
									fontSize: 12,
								}}>
								+1
							</Text>
						</TouchableOpacity>
					</View>

					<TouchableOpacity
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 12,
							backgroundColor: 'white',
							height: 50,
							marginBottom: 10,
						}}
						onPress={() => navigation.navigate('WaitingScreen')}>
						<Text
							style={{
								color: 'black',
								fontWeight: 'bold',
								fontSize: 12,
							}}>
							Raise Fare
						</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							alignItems: 'center',
							justifyContent: 'center',
							borderRadius: 12,
							backgroundColor: '#FF4C4C',
							height: 50,
							marginBottom: 10,
						}}
						onPress={() => navigation.goBack()}>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
								fontSize: 12,
							}}>
							Cancel
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

export default RideRequestScreen;
