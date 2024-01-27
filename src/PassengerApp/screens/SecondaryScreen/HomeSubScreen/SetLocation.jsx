import React, { useState, useEffect } from 'react';
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
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import SecondaryScreenTopBar from '../../../components/MutualComponents/SecondaryScreenTopBar';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../../../../utils/navSlice';

export default function SetLocation({ navigation, route }) {
	const { Location } = route.params;
	const dispatch = useDispatch();
	const [originPlace, setOriginPlace] = useState(null);
	const checkNavigation = () => {
		if (originPlace) {
			if (Location === 1) {
				dispatch(setOrigin(originPlace));
			} else {
				dispatch(setDestination(originPlace));
			}
			navigation.navigate('TabNavigatorPassenger');
		}
	};

	useEffect(() => {
		checkNavigation();
	}, [originPlace]);

	return (
		<View
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
				<GooglePlacesAutocomplete
					placeholder={Location === 1 ? 'Pick Up' : 'Destination'}
					onPress={(data, details = null) => {
						setOriginPlace({
							name: details.formatted_address,
							location: details.geometry.location,
							description: data.description,
						});
					}}
					fetchDetails={true}
					returnKeyType={'Search'}
					currentLocation={Location === 1 ? true : false}
					currentLocationLabel='Current location'
					styles={{
						container: {
							flex: 0,
						},
						textInput: {
							paddingHorizontal: 15,
							height: 45,
							width: '100%',
							fontSize: 12,
							borderRadius: 12,
							color: 'white',
							backgroundColor: '#333333',
						},
						row: {
							backgroundColor: '#FFFFFF',
							height: 45,
						},
					}}
					textInputProps={{
						placeholderTextColor: 'white',
						returnKeyType: 'search',
					}}
					debounce={400}
					minLength={4}
					enablePoweredByContainer={false}
					nearbyPlacesAPI='GooglePlacesSearch'
					query={{
						key: 'AIzaSyDEBlZDXMpfgJKt8cUjz2JVTEjYqapwaK0',
						language: 'en',
					}}
				/>
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
				{/* <View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
					}}>
					<Ionicons
						name={'location-outline'}
						color={'white'}
						size={24}
						style={{ width: '10%' }}
					/>
				</View> */}
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
