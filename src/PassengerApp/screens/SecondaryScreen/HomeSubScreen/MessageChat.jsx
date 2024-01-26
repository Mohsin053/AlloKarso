import { StyleSheet, Text, View, ScrollView, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import img1 from '../../../assets/img/img1.png';

const data = [
	{
		id: 0,
		time: '2:23 AM',
		route: 'you have completed a ride successfully',
	},
	{
		id: 1,
		time: '2:23 AM',
		route: 'you have completed a ride successfully',
	},
	{
		id: 2,
		time: '2:23 AM',
		route: 'you have completed a ride successfully',
	},
];

export default function MessageChat({ navigation }) {
	return (
		<ScrollView
			style={{
				flex: 1,
				backgroundColor: 'black',
			}}>
			<View>
				{/*top bar showing profile info */}
				<View style={styles.uppertab}>
					<View style={styles.innertab}>
						<TouchableOpacity onPress={() => navigation.goBack()}>
							<Ionicons
								name='chevron-back'
								color={'black'}
								size={30}
							/>
						</TouchableOpacity>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
							}}>
							<Avatar
								source={img1}
								size={45}
								style={{ marginRight: 10 }}
							/>
							<Text
								style={{
									fontSize: 20,
									fontWeight: 'bold',
									color: 'black',
									marginLeft: 10,
								}}>
								{currentChatUser.username}
							</Text>
						</View>
						<TouchableOpacity>
							<Ionicons
								name='ellipsis-horizontal'
								color={'black'}
								size={30}
							/>
						</TouchableOpacity>
					</View>
				</View>
			</View>

			{/*chat area showing  messages */}
			{messages.length === 0 ? (
				<View
					style={{
						width: '100%',
						flex: 1,
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					<Text
						style={{
							color: 'black',
							fontSize: 16,
							fontWeight: 'bold',
						}}>
						Be the First to send a message
					</Text>
				</View>
			) : (
				<FlatList
					ref={(ref) => {
						listViewRef = ref;
					}}
					data={messages}
					renderItem={renderItem}
					keyExtractor={(item, index) =>
						item.id ? item.id.toString() : index.toString()
					}
					style={{
						width: '100%',
						flex: 1,
					}}
				/>
			)}

			{/*type messages area */}
			<View style={styles.buttonview}>
				<View style={styles.messagebar}>
					<View style={styles.container}>
						<TextInput
							style={styles.input}
							placeholder='Type message....'
							placeholderTextColor={'darkgray'}
							onChangeText={setNewMessage}
							value={newMessage}
						/>
					</View>
					<TouchableOpacity
						style={styles.iconview}
						onPress={handleSubmit}
						disabled={!newMessage.trim()}>
						<Ionicons
							name='paper-plane'
							color={'white'}
							size={25}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	uppertab: {
		height: 70,
		backgroundColor: 'white',
		marginBottom: 10,
		alignItems: 'center',
		shadowColor: '#171717',
		shadowOffset: { width: -2, height: 4 },
		shadowOpacity: 0.2,
		shadowRadius: 3,
		elevation: 10,
	},
	innertab: {
		width: '95%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 'auto',
		justifyContent: 'space-between',
	},
	buttonview: {
		flexDirection: 'row',
		height: 80,
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	messagebar: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	iconview: {
		width: '16%',
		height: 50,
		borderRadius: 50,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#FF8216',
		elevation: 5,
	},
	container: {
		width: '82%',
		padding: 4,
		backgroundColor: '#F5F5F5',
		elevation: 5,
		height: 50,
		borderRadius: 50,
	},
	input: {
		fontSize: 18,
		color: 'darkgray',
		padding: 10,
	},
});
