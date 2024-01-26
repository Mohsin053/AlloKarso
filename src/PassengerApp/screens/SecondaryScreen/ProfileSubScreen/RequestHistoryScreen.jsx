import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import SecondaryScreenTopBar from '../../../components/MutualComponents/SecondaryScreenTopBar';

const data = [
	{
		id: 0,
		time: '2:23 AM',
		route: 'College RD - University',
		status: 'cancelled',
	},
	{
		id: 1,
		time: '2:23 AM',
		route: 'College RD - University',
		status: 'completed',
	},
	{
		id: 2,
		time: '2:23 AM',
		route: 'College RD - University',
		status: 'cancelled',
	},
];

export default function RequestHistoryScreen({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<SecondaryScreenTopBar
				navigation={navigation}
				title={'Request History'}
			/>

			<View
				style={{
					width: '100%',
					marginBottom: 20,
				}}>
				{/*Button Card View */}
				{data.map((item) => (
					<TouchableOpacity
						key={item.id}
						style={{
							borderBottomWidth: 1,
							borderBottomColor: '#2C2C2C',
							height: 85,
							paddingHorizontal: 10,
							alignItems: 'center',
							flexDirection: 'row',
						}}
						onPress={() =>
							navigation.navigate('RideDetailsScreen')
						}>
						<Ionicons
							name={'ellipse'}
							color={'#333333'}
							size={24}
						/>
						<View style={{ marginLeft: 20 }}>
							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
								}}>
								{item.time}
							</Text>
							<Text
								style={{
									color: 'white',
									fontWeight: 'light',
									fontSize: 14,
								}}>
								{item.route}
							</Text>
						</View>

						<Text
							style={{
								color:
									item.status === 'completed'
										? '#00A76F'
										: '#FF4C4C',
								fontWeight: 'light',
								fontSize: 12,
								marginLeft: 'auto',
							}}>
							{item.status}
						</Text>
					</TouchableOpacity>
				))}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({});
