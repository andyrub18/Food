import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { RootStackNav } from "../../App";
import yelp from "../api/yelp";
import { AxiosResponse } from "axios";
import { BusinessDetail } from "../Types/BusinessDetail";
import { useEffect, useState } from "react";

const ResultsShowScreen = ({
	route,
}: NativeStackScreenProps<RootStackNav, "Show">) => {
	const [result, setresult] = useState<BusinessDetail | null>(null);

	const { id } = route.params;

	const getResult = async (id: string) => {
		try {
			const response: AxiosResponse<BusinessDetail> = await yelp.get(`/${id}`);
			setresult(response.data);
		} catch (err) {}
	};

	useEffect(() => {
		getResult(id);
	}, []);

	if (!result) {
		return null;
	}

	return (
		<View style={styles.containerStyle}>
			<Text style={styles.titleStyle}>{result.name}</Text>
			<FlatList
				data={result.photos}
				keyExtractor={x => x}
				renderItem={({ item }) => (
					<Image style={styles.imageStyle} source={{ uri: item }} />
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	imageStyle: {
		width: 300,
		height: 200,
		marginVertical: 20,
	},
	containerStyle: {
		padding: 10,
	},
	titleStyle: {
		fontWeight: "bold",
		fontSize: 20,
	},
});

export default ResultsShowScreen;
