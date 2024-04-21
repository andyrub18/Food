import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./src/screens/SearchScreen";
import ResultsShowScreen from "./src/screens/ResultsShowScreen";

export type RootStackNav = {
	Search: undefined;
	Show: { id: string };
};

const Stack = createNativeStackNavigator<RootStackNav>();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Search">
				<Stack.Screen
					name="Search"
					component={SearchScreen}
					options={{ title: "Business Search", headerTitleAlign: "center" }}
				/>
				<Stack.Screen
					name="Show"
					component={ResultsShowScreen}
					options={{ title: "Details", headerTitleAlign: "center" }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
