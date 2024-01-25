import React, { useRef, useState } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TouchableWithoutFeedback,
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import BottomSheet from '@gorhom/bottom-sheet';

const HomeScreen = () => {
	const bottomSheetRef = useRef(null);
	const [mapHeight, setMapHeight] = useState('100%');

	const renderContent = () => (
		<View style={styles.bottomSheet}>
			<Text>Bottom Sheet Content</Text>
			{/* Add your content here */}
		</View>
	);

	const handleMapPress = () => {
		setMapHeight('100%');
		if (bottomSheetRef.current && bottomSheetRef.current.snapTo) {
			bottomSheetRef.current.snapTo(0); // Snap to the bottom (hidden) position
		}
	};

	const handleMapLongPress = () => {
		setMapHeight('50%');
		if (bottomSheetRef.current && bottomSheetRef.current.snapTo) {
			bottomSheetRef.current.snapTo(1); // Snap to the top (visible) position
		}
	};

	return (
		<TouchableWithoutFeedback
			onPress={handleMapPress}
			onLongPress={handleMapLongPress}>
			<View style={styles.container}>
				<MapView
					provider={PROVIDER_GOOGLE}
					style={[styles.map, { height: mapHeight }]}
					region={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.015,
						longitudeDelta: 0.0121,
					}}
				/>
				<BottomSheet
					ref={bottomSheetRef}
					index={1}
					snapPoints={['60%', '60%']}
					renderContent={renderContent}
				/>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	map: {
		flex: 1,
	},
	bottomSheet: {
		backgroundColor: 'white',
		padding: 16,
		height: '60%',
	},
});

export default HomeScreen;
