import { useState } from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
	{
		id: 0,
		heading: 'Request Ride',
		subheading: 'Request a ride get picked up by a nearby community driver',
		icon: 'people',
		img: require('../../assets/img/ride.png'),
	},
	{
		id: 1,
		heading: 'Set the Fare',
		subheading:
			'Take control of your journey costs Tailor your ride expenses according to your preferences and budget',
		icon: 'happy',
		img: require('../../assets/img/handshake.png'),
	},
	{
		id: 2,
		heading: 'Track your ride',
		subheading: 'Know your driver’s current location in real time',
		icon: 'shield',
		img: require('../../assets/img/locate.png'),
	},
];

export default function Page2({ navigation }) {
	const [currentCard, setcurrentCard] = useState(0);

	const handleBackButton = () => {
		currentCard === 0
			? navigation.goBack()
			: setcurrentCard(currentCard - 1);
	};
	const handleNextButton = () => {
		currentCard === 2
			? navigation.navigate('Page1')
			: setcurrentCard(currentCard + 1);
	};

	return (
		<View style={styles.container}>
			{/*Top Bar */}
			<View
				style={{
					height: 60,
					flexDirection: 'row',
					width: '100%',
					alignItems: 'center',
					justifyContent: 'space-between',
				}}>
				<Pressable
					onPress={handleBackButton}
					hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
					style={({ pressed }) => [
						{
							width: 40,
							height: 40,
							borderRadius: 20,
							alignItems: 'center',
							justifyContent: 'center',
							padding: 5,
							marginHorizontal: 5,
						},
						pressed && { backgroundColor: 'gray' },
					]}>
					<Octicons name='chevron-left' size={25} color={'white'} />
				</Pressable>
				<Image
					source={require('../../assets/img/cropped.png')}
					style={{ width: 50, height: 50, resizeMode: 'contain' }}
				/>
				<View
					style={{
						width: 40,
						marginHorizontal: 5,
					}}></View>
			</View>

			<Image source={data[currentCard].img} style={styles.img} />

			<View style={styles.mainCard}>
				<LinearGradient
					colors={['#464646', '#1E1D1D']}
					style={styles.roundedIconView}>
					<Ionicons
						name={data[currentCard].icon}
						size={45}
						color={'white'}
					/>
				</LinearGradient>
				<View style={styles.textView}>
					<Text style={styles.UpperHeading}>
						{data[currentCard].heading}
					</Text>
					<Text style={styles.infoText}>
						{data[currentCard].subheading}
					</Text>
				</View>
				<View
					style={{
						flexDirection: 'row',
						alignItems: 'center',
						alignSelf: 'center',
						top: -20,
					}}>
					{currentCard === 0 ? (
						<View style={styles.panel} />
					) : (
						<Octicons
							name='dot-fill'
							color={'gray'}
							size={20}
							style={{ paddingHorizontal: 4 }}
						/>
					)}
					{currentCard === 1 ? (
						<View style={styles.panel} />
					) : (
						<Octicons
							name='dot-fill'
							color={'gray'}
							size={20}
							style={{ paddingHorizontal: 4 }}
						/>
					)}
					{currentCard === 2 ? (
						<View style={styles.panel} />
					) : (
						<Octicons
							name='dot-fill'
							color={'gray'}
							size={20}
							style={{ paddingHorizontal: 4 }}
						/>
					)}
				</View>

				{/* Button */}
				<TouchableOpacity
					style={[styles.button]}
					onPress={handleNextButton}>
					<Text style={styles.buttonText}>Next</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		alignItems: 'center',
	},
	img: {
		width: '90%',
		height: '30%',
		resizeMode: 'contain',
		marginVertical: 30,
	},

	mainCard: {
		backgroundColor: '#333333',
		borderRadius: 15,
		width: '90%',
		elevation: 10,
		marginBottom: 20,
		position: 'absolute',
		bottom: 0,
	},
	roundedIconView: {
		alignItems: 'center',
		justifyContent: 'center',
		width: 95,
		height: 95,
		borderRadius: 100,
		bottom: 50,
		elevation: 10,
		alignSelf: 'center',
	},
	textView: {
		top: -30,
		alignItems: 'center',
		width: '85%',
		alignSelf: 'center',
	},
	UpperHeading: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 20,
		marginBottom: 5,
	},
	infoText: {
		color: 'white',
		fontWeight: 'normal',
		fontSize: 14,
		textAlign: 'center',
	},
	button: {
		backgroundColor: 'white',
		borderRadius: 12,
		height: 50,
		alignItems: 'center',
		justifyContent: 'center',
		width: '90%',

		alignSelf: 'center',
		top: -10,
	},
	buttonText: { fontSize: 16, color: 'black', fontWeight: 'bold' },
	panel: {
		backgroundColor: 'white',
		height: 8,
		width: 20,
		borderRadius: 50,
		marginHorizontal: 4,
	},
});
