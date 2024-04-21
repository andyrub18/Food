export type BusinessSearch = {
	businesses: Business[];
	total: number;
	region: Region;
};

export type Business = {
	id: string;
	alias: string;
	name: string;
	image_url: string;
	is_closed: boolean;
	url: string;
	review_count: number;
	categories: Category[];
	rating: number;
	coordinates: Center;
	transactions: Transaction[];
	price?: Price;
	location: Location;
	phone: string;
	display_phone: string;
	distance: number;
};

export type Category = {
	alias: string;
	title: string;
};

export type Center = {
	latitude: number;
	longitude: number;
};

export type Location = {
	address1: string;
	address2: null | string;
	address3: Address3 | null;
	city: City;
	zip_code: string;
	country: Country;
	state: State;
	display_address: string[];
};

export enum Address3 {
	Empty = "",
	TheEquitableBldg = "The Equitable Bldg",
}

export enum City {
	Brooklyn = "Brooklyn",
	NewYork = "New York",
}

export enum Country {
	Us = "US",
}

export enum State {
	Ny = "NY",
}

export enum Price {
	VeryExpensive = "$$$$$",
	BigSpender = "$$$$",
	CostEffective = "$$",
	BitPricier = "$$$",
	Cheap = "$",
}

export enum Transaction {
	Delivery = "delivery",
	Pickup = "pickup",
	RestaurantReservation = "restaurant_reservation",
}

export type Region = {
	center: Center;
};
