import { Text, View } from 'react-native';

export default function TabNavigatorTopBar({ title }) {
	return (
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
				{title}
			</Text>
		</View>
	);
}
