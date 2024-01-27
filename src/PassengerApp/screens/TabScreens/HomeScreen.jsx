import { useRef, useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Text, Dimensions, Image } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';
import Geolocation from '@react-native-community/geolocation';
import {
	ScrollView,
	FlatList,
	TouchableOpacity,
	GestureHandlerRootView,
} from 'react-native-gesture-handler';

import economycar from '../../assets/img/economycar.png';
import Taxi from '../../assets/img/Car.png';
import scooter from '../../assets/img/scooter.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
	selectOrigin,
	selectDestination,
	selectTravelTimeInformation,
	setRideType,
	setTravelTimeInformation,
} from '../../../utils/navSlice';
import { useSelector, useDispatch } from 'react-redux';
import CommentModal from '../../components/loginComponents/CommentModal';
import PriceModal from '../../components/loginComponents/PriceModal';
const data = [
	{ id: 0, title: 'Economy', image: economycar },
	{ id: 1, title: 'Taxi', image: Taxi },
	{ id: 2, title: 'Bike', image: scooter },
];
import MapViewDirections from 'react-native-maps-directions';

const GOOGLE_MAPS_APIKEY = 'AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0';

const cars = [
	{
		id: '0',
		type: 'UberX',
		latitude: 33.7443416,
		longitude: 73.1086782,
		heading: 47,
	},
	{
		id: '1',
		type: 'Comfort',
		latitude: 33.7443312,
		longitude: 73.1086782,
		heading: 190,
	},
	{
		id: '2',
		type: 'UberXL',
		latitude: 33.744208,
		longitude: 73.1086782,
		heading: 99,
	},
	{
		id: '3',
		type: 'Comfort',
		latitude: 33.749999,
		longitude: 73.108555,
		heading: 120,
	},
];

const HomeScreen = ({ navigation }) => {
	const [userLocation, setUserLocation] = useState(null);
	const bottomSheetRef = useRef(null);
	const [activeButton, setactiveButton] = useState(0);
	const origin = useSelector(selectOrigin);
	const destination = useSelector(selectDestination);
	const dispatch = useDispatch();
	const [distance, setDistance] = useState('');
	const [travelTime, setTravelTime] = useState('');
	const [duration, setDuration] = useState(0);
	const [price, setPrice] = useState('');
	const [comment, setComment] = useState('Comments');
	const mapRef = useRef(null);
	const SURGE_CHARGE_RATE = 0.5;

	const [isTermsModalOpen, setIsTermsModalOpen] = useState(false);
	const [isPriceModalOpen, setIsPriceModalOpen] = useState(false);
	// bottom sheet modal
	const bottomSheetModalRef = useRef(null);
	const bottomSheetModalRef1 = useRef(null);
	const handleOpenTermsModal = () => {
		bottomSheetModalRef.current?.present();
		setIsTermsModalOpen(true);
	};

	const handleCloseTermsModal = (data) => {
		setIsTermsModalOpen(false);
	};

	const handleOpenPriceModal = () => {
		bottomSheetModalRef1.current?.present();
		setIsPriceModalOpen(true);
	};

	const handleClosePriceModal = () => {
		setIsPriceModalOpen(false);
	};

	const handlesetRequest = () => {
		dispatch(setRideType(activeButton));
		navigation.navigate('RideRequestScreen');
	};

	// effects
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

	useEffect(() => {
		if (!origin || !destination == null) return;
		const getTravelTime = async () => {
			try {
				const res = await fetch(
					`https://maps.googleapis.com/maps/api/distancematrix/json?origins=${origin.location.lat},${origin.location.lng}&destinations=${destination.location.lat},${origin.location.lng}&key=${GOOGLE_MAPS_APIKEY}`,
					{
						headers: {
							'content-type': 'application/json',
						},
					}
				);

				const response = await res.json();
				console.log(response.rows[0].elements[0]);
				setDistance(response.rows[0].elements[0].distance.text);
				setTravelTime(response.rows[0].elements[0].duration.text);
				setDuration(response.rows[0].elements[0].duration.value);
				setPrice(
					new Intl.NumberFormat('en-gb', {
						style: 'currency',
						currency: 'MAD',
					}).format((duration * SURGE_CHARGE_RATE) / 100)
				);
				dispatch(
					setTravelTimeInformation(response.rows[0].elements[0])
				);
			} catch (err) {
				console.log(err);
			}
		};
		getTravelTime();
	}, [origin, destination]);

	const handleactiveButtonPress = (a) => {
		setactiveButton(a);
	};

	useEffect(() => {
		// Get user's current location
		Geolocation.getCurrentPosition(
			(position) => {
				const { latitude, longitude } = position.coords;
				setUserLocation({ latitude, longitude });
			},
			(error) => console.log('Error getting location:', error),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
		);
	}, []);

	return (
		<GestureHandlerRootView style={styles.container}>
			<View
				style={{
					height: '40%',
					flex: 1,
				}}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={{
						height: '40%',
					}}
					showsUserLocation={origin && destination ? false : true}
					showsCompass={false}
					region={{
						latitude: userLocation?.latitude || 28.456312,
						longitude: userLocation?.longitude || -16.252929,
						latitudeDelta: 0.001,
						longitudeDelta: 0.01,
					}}
					maxZoomLevel={1000}
					ref={mapRef}>
					{cars.map((car) => (
						<Marker
							key={car.id}
							coordinate={{
								latitude: car.latitude,
								longitude: car.longitude,
							}}
							tracksViewChanges={false}>
							<Image
								style={{
									width: 50,
									height: 50,
									resizeMode: 'contain',
									transform: [
										{
											rotate: `${car.heading}deg`,
										},
									],
								}}
								source={require('../../assets/img/MapCar.png')}
							/>
						</Marker>
					))}
					{!origin && (
						<Marker
							coordinate={{
								latitude: userLocation?.latitude || 28.456312,
								longitude:
									userLocation?.longitude || -16.252929,
								latitudeDelta: 0.0122,
								longitudeDelta: 0.0421,
							}}
						/>
					)}
					{origin?.location && (
						<Marker
							coordinate={{
								latitude: origin.location.lat,
								longitude: origin.location.lng,
							}}
							description={origin.description}
							identifier='origin'
						/>
					)}
					{destination?.location && (
						<Marker
							coordinate={{
								latitude: destination.location.lat,
								longitude: destination.location.lng,
							}}
							description={destination.description}
							identifier='destination'
						/>
					)}
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
						onPress={() =>
							navigation.navigate('SetLocation', {
								Location: 1,
							})
						}>
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
								{origin
									? origin.name.substring(0, 35) + '...'
									: 'Pick Up'}
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
						onPress={() =>
							navigation.navigate('SetLocation', {
								Location: 2,
							})
						}>
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
								{destination
									? destination.name.substring(0, 35) + '...'
									: 'Destination'}
							</Text>
						</View>
					</TouchableOpacity>
					{origin && destination && (
						<View
							style={{
								alignItems: 'center',
								justifyContent: 'center',
								borderRadius: 12,
								backgroundColor: 'rgba(255, 255, 255, 0.65)',
								height: 40,
								marginBottom: 5,
								width: '90%',
								marginLeft: 'auto',
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
								{distance}-{travelTime}
							</Text>
						</View>
					)}

					<TouchableOpacity
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							width: '100%',
							marginBottom: 5,
						}}
						onPress={handleOpenPriceModal}>
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
								{price}
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
						onPress={handleOpenTermsModal}>
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
								{comment}
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
						onPress={handlesetRequest}>
						<Text
							style={{
								color: 'black',
								fontWeight: 'bold',
								fontSize: 12,
							}}>
							Find ride
						</Text>
					</TouchableOpacity>
				</ScrollView>
			</BottomSheet>
			<CommentModal
				isOpen={isTermsModalOpen}
				onClose={handleCloseTermsModal}
				bottomSheetModalRef={bottomSheetModalRef}
			/>
			<PriceModal
				isOpen={isPriceModalOpen}
				onClose={handleClosePriceModal}
				bottomSheetModalRef1={bottomSheetModalRef1}
			/>
		</GestureHandlerRootView>
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
