import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SettingScreen({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
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
					Settings
				</Text>
				<Ionicons
					name={'chevron-back'}
					color={'transparent'}
					size={20}
				/>
			</View>

			<View
				style={{
					width: '90%',
					alignSelf: 'center',
					marginVertical: 20,
				}}>
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
							paddingHorizontal: 20,
							alignItems: 'center',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
								marginLeft: 5,
							}}>
							Language
						</Text>
						<Ionicons
							name={'chevron-forward'}
							color={'white'}
							size={24}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderBottomWidth: 1,
							borderBottomColor: '#2C2C2C',
							height: 50,
							paddingHorizontal: 20,
							alignItems: 'center',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
							}}>
							Date and Distance
						</Text>
						<Ionicons
							name={'chevron-forward'}
							color={'white'}
							size={24}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderBottomWidth: 1,
							borderBottomColor: '#2C2C2C',
							height: 50,
							paddingHorizontal: 20,
							alignItems: 'center',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
							}}>
							Rules and terms
						</Text>
						<Ionicons
							name={'chevron-forward'}
							color={'white'}
							size={24}
						/>
					</TouchableOpacity>
					<TouchableOpacity
						style={{
							borderBottomWidth: 1,
							borderBottomColor: '#2C2C2C',
							height: 50,
							paddingHorizontal: 20,
							alignItems: 'center',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Text
							style={{
								color: 'white',
								fontWeight: 'light',
								fontSize: 12,
							}}>
							Delete account
						</Text>
						<Ionicons
							name={'chevron-forward'}
							color={'white'}
							size={24}
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
					<Text
						style={{
							color: 'black',
							fontWeight: 'bold',
							fontSize: 14,
						}}>
						Log out
					</Text>
				</TouchableOpacity>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
