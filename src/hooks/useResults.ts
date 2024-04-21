import { AxiosResponse } from "axios";
import { useState, useEffect } from "react";
import { Business, BusinessSearch } from "../Types/Business";
import yelp from "../api/yelp";

type ResultsReturnType = [
	(searchTerm: string) => Promise<void>,
	Business[],
	string
];

export default (): ResultsReturnType => {
	const [results, setResults] = useState<Business[]>([]);
	const [errorMessage, seterrorMessage] = useState("");

	const searchApi = async (searchTerm: string) => {
		try {
			const response: AxiosResponse<BusinessSearch> = await yelp.get(
				"/search",
				{
					params: {
						location: "NYC",
						limit: 50,
						term: searchTerm,
					},
				}
			);
			setResults(response.data.businesses);
		} catch (err) {
			seterrorMessage("Something went wrong");
		}
	};

	useEffect(() => {
		searchApi("");
	}, []);

	return [searchApi, results, errorMessage];
};
