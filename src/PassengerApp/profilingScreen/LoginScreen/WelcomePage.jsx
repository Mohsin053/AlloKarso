import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import Applogo from '../../assets/img/Applogo.jpeg';
import welcomeImg from '../../assets/img/welcome.png';

export default function WelcomePage({ navigation }) {
	return (
		<View style={{ flex: 1, backgroundColor: 'black' }}>
			<View style={styles.container}>
				{/* Image and SubText */}

				<Image source={Applogo} style={styles.img} />
				<Image source={welcomeImg} style={styles.img1} />
				<View
					style={{
						width: '100%',
					}}>
					<Text
						style={{
							fontSize: 22,
							color: 'white',
							textAlign: 'center',
						}}>
						Welcome to Allo Karso
					</Text>
					<Text
						style={{
							fontSize: 16,
							color: 'rgba(255, 255, 255, 0.65)',
							textAlign: 'center',
						}}>
						where every journey is an experience
					</Text>
				</View>

				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>Get started</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '90%',
		alignSelf: 'center',
		justifyContent: 'space-between',
	},
	img: {
		height: 150,
		width: 150,
		alignSelf: 'center',
	},
	img1: {
		height: 250,
		width: 250,
		alignSelf: 'center',
	},

	button: {
		borderRadius: 12,
		height: 50,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		marginBottom: 50,
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
	},
});
