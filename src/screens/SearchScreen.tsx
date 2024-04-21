import { Text, StyleSheet, ScrollView } from "react-native";
import SearchBar from "../components/SearchBar";
import { useState } from "react";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
import { Price } from "../Types/Business";

const SearchScreen = () => {
	const [term, setTerm] = useState("");
	const [searchApi, results, errorMessage] = useResults();

	const filterResultByPrice = (price: Price) => {
		return results.filter(result => result.price === price);
	};

	return (
		<>
			<SearchBar
				term={term}
				onTermChange={setTerm}
				onTermSubmit={() => searchApi(term)}
			/>
			{errorMessage && <Text>{errorMessage}</Text>}
			<ScrollView>
				<ResultsList
					results={filterResultByPrice(Price.CostEffective)}
					title="Cost Effective"
				/>
				<ResultsList
					results={filterResultByPrice(Price.BitPricier)}
					title="Bit Pricier"
				/>
				<ResultsList
					results={filterResultByPrice(Price.BigSpender)}
					title="Big Spender"
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;
