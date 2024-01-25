import { View, Text, FlatList } from 'react-native';
import {
	BottomSheetModalProvider,
	BottomSheetModal,
} from '@gorhom/bottom-sheet';
import { ScrollView } from 'react-native-gesture-handler';

const termsAndConditionsData = [
	{
		title: '1. Introduction',
		content:
			"1.1. This terms and conditions explains how Allo Karso LTD ('we,' 'us,' or 'our') collects, uses, and discloses personal information in compliance with the UK General Data Protection Regulation (GDPR). We are committed to protecting your privacy and ensuring the security of your personal information. Please read this Privacy Policy carefully to understand our practices regarding your personal data.",
	},
	{
		title: '2. Information We Collect',
		content:
			'2.1. Personal Information: We may collect and process the following personal information about you:\n  - Contact Information: such as your name, email address,\n  - Account Information: such as your username, and other credentials for accessing our services.\n  - Payment Information: such as your credit card or other payment details when you make a purchase.\n  - Communication Information: such as records of your correspondence and communication with us.\n  - Usage Information: such as information about how you use our services, including your preferences and settings.',
	},
	{
		title: '3. Use of Information',
		content:
			'3.1. We may use the personal information we collect for the following purposes:-To provide and maintain our services to you. -To communicate with you, respond to your inquiries, and provide customer support. -To process payments and fulfill orders. -To send you marketing communications, promotional offers, and newsletters. -To improve and personalise our services, analyse usage patterns, and conduct research. -To comply with legal obligations and enforce our rights.',
	},
	{
		title: '4. Legal Basis for Processing',
		content:
			'4.1. We rely on the following legal bases for processing personal information:  - Contractual Necessity: Processing is necessary for the performance of a contract with you or to take steps at your request before entering into a contract.  - Consent: We may rely on your freely given and informed consent for specific processing activities, such as sending marketing communications.  - Legitimate Interests: Processing is necessary for our legitimate interests or the legitimate interests of third parties, provided that your fundamental rights and interests do not override those interests.',
	},
	{
		title: '5. Data Sharing and Transfers',
		content:
			'5.1. We may share your personal information with trusted third parties, including service providers, business partners, and affiliated companies, for the purposes described in this Privacy Policy. We ensure that such third parties are bound by appropriate confidentiality and data protection obligations.',
	},
	{
		title: '6. Data Retention',
		content:
			'6.1. We will retain your personal information only for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. We will securely delete or anonymise your personal information when it is no longer needed.',
	},
	{
		title: '7. Your Rights',
		content:
			'7.1. You have certain rights regarding your personal information, subject to applicable law, including the right to:\n  - Access your personal information and receive a copy of it.\n  - Rectify any inaccurate personal information we hold about you.\n  - Erase your personal information under certain conditions.\n  - Restrict or object to the processing of your personal information.\n  - Withdraw your consent, where processing is based on consent.\n  - Data portability, i.e., receive your personal information in a structured, commonly used, and machine-readable format, and transmit it to another controller.',
	},
	{
		title: '8. Data Security',
		content:
			'8.1. We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no data transmission or storage system can be guaranteed to be 100% secure.',
	},
];

const TermsModal = ({ isOpen, onClose, bottomSheetModalRef }) => {
	const snapPoints = ['50%'];

	return (
		<BottomSheetModalProvider>
			<BottomSheetModal
				ref={bottomSheetModalRef}
				index={0}
				snapPoints={snapPoints}
				backgroundStyle={{
					borderRadius: 50,
					backgroundColor: '#1F1F1F',
				}}
				onDismiss={onClose}
				isVisible={isOpen}>
				<View style={styles.contentContainer}>
					<Text style={styles.title}>Terms And Condition</Text>
					<ScrollView
						style={{
							flex: 1,
							margin: 5,
							backgroundColor: 'black',
							width: '95%',
							borderRadius: 20,
							padding: 10,
						}}>
						{termsAndConditionsData.map((item, index) => (
							<View key={index} style={styles.termItem}>
								<Text style={styles.headingText}>
									{item.title}
								</Text>
								<Text style={styles.belowHeadingText}>
									{item.content}
								</Text>
							</View>
						))}
					</ScrollView>
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

export default TermsModal;
