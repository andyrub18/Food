import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import { Business } from "../Types/Business";
import ResultsDetail from "./ResultsDetail";
import { RootStackNav } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type ResultListProps = {
	title: string;
	results: Business[];
};

const ResultsList = ({ title, results }: ResultListProps) => {
	const navigation =
		useNavigation<NativeStackNavigationProp<RootStackNav, "Search">>();

	if (!results.length) {
		return null;
	}

	return (
		<View style={styles.containerStyle}>
			<Text style={styles.titleStyle}>{title}</Text>
			<FlatList
				horizontal
				showsHorizontalScrollIndicator={false}
				data={results}
				keyExtractor={result => result.id}
				renderItem={({ item }) => (
					<Pressable
						onPress={() => navigation.navigate("Show", { id: item.id })}
					>
						<ResultsDetail item={item} />
					</Pressable>
				)}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	titleStyle: {
		fontSize: 18,
		fontWeight: "bold",
		marginLeft: 15,
		marginBottom: 5,
	},
	containerStyle: {
		marginBottom: 10,
	},
});

export default ResultsList;
