import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import logoimg from '../../assets/img/cropped.png';

export default function LoginEmailScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Image source={logoimg} style={styles.img} resizeMode='contain' />
			<TouchableOpacity
				style={styles.button}
				onPress={() => navigation.navigate('Page2')}>
				<Text style={styles.buttonText}>Let’s Get Started</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black',
		padding: 20,
	},

	img: {
		height: 270,
		width: 270,
		alignSelf: 'center',
		marginTop: 100,
	},
	button: {
		borderRadius: 12,
		height: 50,
		backgroundColor: 'white',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 'auto',
		marginBottom: 30,
		width: '100%',
	},
	buttonText: {
		color: 'black',
		fontWeight: 'bold',
	},
});
