import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	Image,
	FlatList,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Ionicons from 'react-native-vector-icons/Ionicons';

const data = [{ id: 0, title: 'Economy' }];

export default function FindingFreightDriver({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			{/*Top Bar*/}
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
					Finding Drivers
				</Text>
				<Ionicons
					name={'chevron-back'}
					color={'transparent'}
					size={20}
				/>
			</View>

			{/*screen view */}
			<View
				style={{
					marginBottom: 20,
					width: '95%',
					alignSelf: 'center',
				}}>
				{data.map((item) => (
					<View
						key={item.id} // Add a unique key for each item when rendering a list
						style={{
							backgroundColor: '#333333',
							height: 280,
							borderRadius: 20,
							padding: 20,
							marginTop: 20,
							justifyContent: 'space-between',
						}}>
						<View
							style={{
								flexDirection: 'row',
							}}>
							<Ionicons name={'time'} color={'white'} size={20} />
							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
									marginLeft: 5,
								}}>
								Driver respond between 5 minutes
							</Text>
						</View>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 14,
							}}>
							Published now
						</Text>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
								fontSize: 20,
							}}>
							100$ for private ride
						</Text>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
								fontSize: 14,
							}}>
							Tuesday 13 Feb, 9 AM
						</Text>
						<View style={{ flexDirection: 'row' }}>
							<Ionicons
								name={'location'}
								color={'#FF4C4C'}
								size={20}
							/>
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
							<Ionicons
								name={'location'}
								color={'#00A76F'}
								size={20}
							/>
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
						<TouchableOpacity
							style={{
								backgroundColor: '#FF4C4C',
								height: 50,
								borderRadius: 12,
								alignItems: 'center',
								padding: 10,
								justifyContent: 'center',
							}}>
							<Text
								style={{
									color: 'white',
									fontWeight: 'bold',
									fontSize: 14,
								}}>
								Cancel Request
							</Text>
						</TouchableOpacity>
					</View>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
