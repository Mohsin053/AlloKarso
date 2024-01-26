import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SecondaryScreenTopBar from '../../../components/MutualComponents/SecondaryScreenTopBar';

export default function SettingScreen({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<SecondaryScreenTopBar navigation={navigation} title={'Settings'} />

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
