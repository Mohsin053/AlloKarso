import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Applogo from '../../assets/img/cropped.png';
import AvatarImg from '../../assets/img/img1.png';
import { Avatar } from '@rneui/themed';

export default function PassengerProfileScreen({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<Image
				source={Applogo}
				style={{
					width: 100,
					height: 100,
					resizeMode: 'contain',
					alignSelf: 'center',
					marginVertical: 30,
				}}
			/>

			<View
				style={{
					width: '90%',
					alignSelf: 'center',
					marginVertical: 20,
				}}>
				{/*Profile Card View */}
				<TouchableOpacity
					style={{
						backgroundColor: '#333333',
						height: 100,
						borderRadius: 20,
						padding: 10,
						justifyContent: 'space-between',
						flexDirection: 'row',
						alignItems: 'center',
						marginBottom: 30,
					}}
					onPress={() => navigation.navigate('UpdateProfileScreen')}>
					<Avatar
						size={60}
						rounded
						source={AvatarImg}
						imageProps={{ resizeMode: 'contain' }}
						containerStyle={{
							width: '20%',
							borderColor: 'white',
							borderWidth: 2,
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

					<Ionicons
						name={'chevron-forward'}
						color={'white'}
						size={24}
					/>
				</TouchableOpacity>

				{/*Button Card View */}

				<View
					style={{
						backgroundColor: '#333333',
						borderRadius: 20,
						marginBottom: 50,
					}}>
					<TouchableOpacity
						style={{
							borderBottomWidth: 1,
							borderBottomColor: '#2C2C2C',
							height: 50,
							paddingHorizontal: 10,
							alignItems: 'center',
							flexDirection: 'row',
						}}
						onPress={() =>
							navigation.navigate('RequestHistoryScreen')
						}>
						<Ionicons
							name={'receipt'}
							color={'white'}
							size={24}
							style={{ marginRight: 10 }}
						/>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
								marginLeft: 5,
							}}>
							Request History
						</Text>
						<Ionicons
							name={'chevron-forward'}
							color={'white'}
							size={24}
							style={{ marginLeft: 'auto' }}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderBottomWidth: 1,
							borderBottomColor: '#2C2C2C',
							height: 50,
							paddingHorizontal: 10,
							alignItems: 'center',
							flexDirection: 'row',
						}}
						onPress={() => navigation.navigate('SettingScreen')}>
						<Ionicons
							name={'settings'}
							color={'white'}
							size={24}
							style={{ marginRight: 10 }}
						/>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
								marginLeft: 5,
							}}>
							Settings
						</Text>
						<Ionicons
							name={'chevron-forward'}
							color={'white'}
							size={24}
							style={{ marginLeft: 'auto' }}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderBottomWidth: 1,
							borderBottomColor: '#2C2C2C',
							height: 50,
							paddingHorizontal: 10,
							alignItems: 'center',
							flexDirection: 'row',
						}}>
						<Ionicons
							name={'globe'}
							color={'white'}
							size={24}
							style={{ marginRight: 10 }}
						/>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
								marginLeft: 5,
							}}>
							Community Resources
						</Text>
						<Ionicons
							name={'chevron-forward'}
							color={'white'}
							size={24}
							style={{ marginLeft: 'auto' }}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderBottomWidth: 1,
							borderBottomColor: '#2C2C2C',
							height: 50,
							paddingHorizontal: 10,
							alignItems: 'center',
							flexDirection: 'row',
						}}>
						<Ionicons
							name={'alert-circle'}
							color={'white'}
							size={24}
							style={{ marginRight: 10 }}
						/>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
								marginLeft: 5,
							}}>
							Help & support
						</Text>
						<Ionicons
							name={'chevron-forward'}
							color={'white'}
							size={24}
							style={{ marginLeft: 'auto' }}
						/>
					</TouchableOpacity>
				</View>
				{/*Swictch button */}
				<TouchableOpacity
					style={{
						backgroundColor: 'white',
						height: 50,
						borderRadius: 12,
						alignItems: 'center',
						padding: 10,
						justifyContent: 'center',
						marginBottom: 50,
					}}>
					<View
						style={{
							flexDirection: 'row',
						}}>
						<Ionicons
							name={'arrow-forward-circle'}
							color={'black'}
							size={24}
							style={{ marginLeft: 'auto' }}
						/>
						<Text
							style={{
								color: 'black',
								fontWeight: 'bold',
								fontSize: 14,
							}}>
							Driver Mode
						</Text>
					</View>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
