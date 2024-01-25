import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import NewRequestScreen from '../SecondaryScreen/citytocitySubscreen/NewRequestScreen';
import CityOrderScreen from '../SecondaryScreen/citytocitySubscreen/CityOrderScreen';
export default function CityToCityScreen({ navigation }) {
	const [currentScreen, setCurrentScreen] = useState(0);

	const handleButtonPress = (a) => {
		setCurrentScreen(a);
	};

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
					City to City
				</Text>
			</View>

			{/*Switching Bar*/}
			<View
				style={{
					height: 40,
					backgroundColor: '#333333',
					flexDirection: 'row',
					borderRadius: 8,
					width: '60%',
					alignSelf: 'center',
					marginVertical: 20,
					padding: 10,
					alignItems: 'center',
					justifyContent: 'center',
				}}>
				<Pressable
					onPress={() => handleButtonPress(0)}
					hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
					style={({ pressed }) => [
						{
							width: '50%',
							height: 25,
							borderRadius: 20,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor:
								currentScreen === 0 ? 'white' : '#333333',
							borderRadius: 8,
							elevation: currentScreen === 0 ? 5 : 0,
						},
						pressed && { backgroundColor: 'gray' },
					]}>
					<Text
						style={{
							color: currentScreen === 0 ? 'black' : 'white',
							fontWeight: 'bold',
							fontSize: 14,
						}}>
						Ride
					</Text>
				</Pressable>
				<Pressable
					onPress={() => handleButtonPress(1)}
					style={({ pressed }) => [
						{
							width: '50%',
							height: 25,
							borderRadius: 20,
							alignItems: 'center',
							justifyContent: 'center',
							backgroundColor:
								currentScreen === 1 ? 'white' : '#333333',
							borderRadius: 8,
							elevation: currentScreen === 1 ? 5 : 0,
						},
						pressed && { backgroundColor: 'gray' },
					]}>
					<Text
						style={{
							color: currentScreen === 1 ? 'black' : 'white',
							fontWeight: 'bold',
							fontSize: 14,
						}}>
						Orders
					</Text>
				</Pressable>
			</View>

			{/*screen view */}
			{currentScreen === 0 ? (
				<NewRequestScreen navigation={navigation} />
			) : (
				<CityOrderScreen navigation={navigation} />
			)}
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
