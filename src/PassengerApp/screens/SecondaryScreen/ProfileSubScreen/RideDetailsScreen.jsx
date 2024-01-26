import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Pressable,
	Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AvatarImg from '../../../assets/img/img1.png';
import { Avatar } from '@rneui/themed';
import Applogo from '../../../assets/img/Theme.png';

import SecondaryScreenTopBar from '../../../components/MutualComponents/SecondaryScreenTopBar';

export default function RideDetailsScreen({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<SecondaryScreenTopBar
				navigation={navigation}
				title={'Ride Details'}
			/>

			<View
				style={{
					backgroundColor: '#333333',
					height: 100,
					padding: 10,
					flexDirection: 'row',
					alignItems: 'center',
					marginBottom: 10,
				}}>
				<Avatar
					size={60}
					rounded
					source={AvatarImg}
					imageProps={{ resizeMode: 'contain' }}
					containerStyle={{
						borderColor: 'white',
						borderWidth: 2,
						marginRight: 10,
					}}
				/>

				<View>
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'space-between',
							flexDirection: 'row',
						}}>
						<Text
							style={{
								color: 'white',
								fontWeight: 'bold',
								fontSize: 20,
							}}>
							John Doe
						</Text>
						<Ionicons
							name={'star'}
							color={'#FBC02D'}
							size={20}
							style={{
								marginLeft: 5,
							}}
						/>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
								marginLeft: 5,
							}}>
							4.5
						</Text>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
								marginLeft: 5,
							}}>
							(212)
						</Text>
					</View>
					<View
						style={{
							alignItems: 'center',
							justifyContent: 'space-between',
							flexDirection: 'row',
						}}>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 14,
								marginLeft: 5,
							}}>
							Suzuki Alto
						</Text>

						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 14,
								marginLeft: 5,
							}}>
							Lex-430
						</Text>
					</View>
				</View>
			</View>

			<View
				style={{
					width: '90%',
					alignSelf: 'center',
					marginVertical: 10,
				}}>
				{/*card View */}
				<View
					style={{
						backgroundColor: '#333333',
						height: 360,
						borderRadius: 20,
					}}>
					<Image
						source={Applogo}
						style={{
							resizeMode: 'stretch',
							height: '50%',
							width: '100%',
						}}
					/>
					<View
						style={{
							height: '50%',
							padding: 15,
							justifyContent: 'space-around',
						}}>
						<View style={{ flexDirection: 'row' }}>
							<Ionicons
								name={'calendar-outline'}
								color={'white'}
								size={20}
							/>
							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
									marginLeft: 10,
								}}>
								January 10, 2023, 9:14
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<Ionicons
								name={'location-outline'}
								color={'white'}
								size={20}
							/>
							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
									marginLeft: 10,
								}}>
								College Rd
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<Ionicons
								name={'location-outline'}
								color={'white'}
								size={20}
							/>
							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
									marginLeft: 10,
								}}>
								University
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<Ionicons
								name={'trending-up'}
								color={'white'}
								size={20}
							/>
							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
									marginLeft: 10,
								}}>
								21km
							</Text>
						</View>
						<View style={{ flexDirection: 'row' }}>
							<Ionicons
								name={'cash-outline'}
								color={'white'}
								size={20}
							/>
							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
									marginLeft: 10,
								}}>
								20 MAD, Cash
							</Text>
						</View>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
