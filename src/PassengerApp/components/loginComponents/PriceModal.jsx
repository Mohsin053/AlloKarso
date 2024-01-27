import { View, Text, FlatList } from 'react-native';
import {
	BottomSheetModalProvider,
	BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';

const PriceModal = ({ isOpen, onClose, bottomSheetModalRef1 }) => {
	const snapPoints = ['50%'];

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={bottomSheetModalRef1}
				index={0}
				snapPoints={snapPoints}
				backgroundStyle={{
					borderRadius: 50,
					backgroundColor: '#1F1F1F',
				}}
				onDismiss={onClose}
				isVisible={isOpen}>
				<View style={styles.contentContainer}>
					<Text style={styles.title}>Offer Your Price</Text>
					<ScrollView
						style={{
							flex: 1,
							margin: 5,
							backgroundColor: 'black',
							width: '95%',
							borderRadius: 20,
							padding: 10,
						}}></ScrollView>
				</View>
			</BottomSheetModal>
		</BottomSheetModalProvider>
	);
};

const styles = {
	contentContainer: {
		flex: 1,
		alignItems: 'center',
		paddingHorizontal: 5,
	},
	title: {
		fontWeight: 'bold',
		fontSize: 16,
		color: 'white',
		textAlign: 'center',
	},
	headingText: {
		color: 'white',
		fontSize: 12,
		fontWeight: 'bold',
		margin: 5,
	},
	belowHeadingText: {
		color: 'white',
		fontSize: 12,
		fontWeight: 'regular',
		margin: 5,
	},
	termItem: {
		marginBottom: 20,
	},
};

export default PriceModal;
