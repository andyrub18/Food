import { StyleSheet, Text, TextInput, View } from "react-native";
import { Feather } from "@expo/vector-icons";

type SearBarProps = {
	term: string;
	onTermChange: (newTerm: string) => void;
	onTermSubmit: () => void;
};

const SearchBar = ({ term, onTermChange, onTermSubmit }: SearBarProps) => {
	return (
		<View style={styles.backgroundStyle}>
			<Feather name="search" style={styles.iconStyle} />
			<TextInput
				autoCapitalize="none"
				autoCorrect={false}
				style={styles.inputStyle}
				placeholder="Search"
				value={term}
				onChangeText={onTermChange}
				onEndEditing={onTermSubmit}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	backgroundStyle: {
		marginVertical: 10,
		paddingHorizontal: 5,
		backgroundColor: "#CFCFCF",
		height: 50,
		borderRadius: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		gap: 4,
	},
	inputStyle: {
		flex: 1,
		fontSize: 18,
		paddingHorizontal: 8,
		paddingVertical: 2,
	},
	iconStyle: {
		fontSize: 35,
		alignSelf: "center",
	},
});

export default SearchBar;
