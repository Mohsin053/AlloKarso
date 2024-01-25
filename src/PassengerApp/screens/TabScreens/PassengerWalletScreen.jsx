import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function PassengerWakketscreen({ navigation }) {
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
					justifyContent: 'center',
					backgroundColor: '#17191B',
					borderBottomColor: '#333333',
					borderBottomWidth: 1,
				}}>
				<Text
					style={{
						color: 'white',
						fontWeight: 'bold',
						textAlign: 'center',
						fontSize: 16,
					}}>
					Wallet
				</Text>
			</View>

			<View
				style={{
					width: '95%',
					alignSelf: 'center',
					marginVertical: 20,
				}}>
				{/*card View */}
				<View
					style={{
						backgroundColor: '#333333',
						height: 300,
						borderRadius: 20,
						padding: 20,
						justifyContent: 'space-between',
					}}>
					<Text
						style={{
							color: 'rgba(255, 255, 255, 0.65)',
							fontWeight: 'bold',
							fontSize: 16,
							marginLeft: 5,
							textAlign: 'center',
						}}>
						Available Balance
					</Text>

					<Text
						style={{
							color: 'white',
							fontWeight: 'bold',
							fontSize: 40,
							textAlign: 'center',
						}}>
						450 MAD
					</Text>
					<View style={{ flexDirection: 'row' }}>
						<View
							style={{
								alignItems: 'center',
								width: '50%',
							}}>
							<TouchableOpacity
								style={{
									height: 60,
									width: 60,
									borderWidth: 1,
									borderColor: 'white',
									borderRadius: 15,
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<Ionicons
									name={'download'}
									color={'white'}
									size={40}
								/>
							</TouchableOpacity>

							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
									marginLeft: 5,
								}}>
								Top Up
							</Text>
						</View>
						<View
							style={{
								alignItems: 'center',
								width: '50%',
							}}>
							<TouchableOpacity
								style={{
									height: 60,
									width: 60,
									borderWidth: 1,
									borderColor: 'white',
									borderRadius: 15,
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<Ionicons
									name={'exit'}
									color={'white'}
									size={40}
								/>
							</TouchableOpacity>

							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
									marginLeft: 5,
								}}>
								Withdraw
							</Text>
						</View>
					</View>
					<View>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
							}}>
							Personal Account
						</Text>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
							}}>
							Today’s earning : 50 MAD
						</Text>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
							}}>
							Total earnings : 2500 MAD
						</Text>
					</View>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
