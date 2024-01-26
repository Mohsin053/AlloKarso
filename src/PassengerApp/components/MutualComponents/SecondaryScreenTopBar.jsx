import { Text, View, Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SecondaryScreenTopBar({ navigation, title }) {
	return (
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
				{title}
			</Text>
			<Ionicons name={'chevron-back'} color={'transparent'} size={20} />
		</View>
	);
}
