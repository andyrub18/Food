import { Image, StyleSheet, Text, View } from "react-native";
import type { Business } from "../Types/Business";

const ResultsDetail = ({ item }: { item: Business }) => {
	return (
		<View style={styles.containerStyle}>
			<Image style={styles.imageStyle} source={{ uri: item.image_url }} />
			<Text style={styles.nameStyle}>{item.name}</Text>
			<Text>
				{item.rating} Stars, {item.review_count} Reviews
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	containerStyle: {
		marginLeft: 15,
	},
	imageStyle: {
		width: 250,
		height: 120,
		borderRadius: 5,
		marginBottom: 5,
	},
	nameStyle: {
		fontWeight: "bold",
		fontSize: 14,
	},
});

export default ResultsDetail;
