export type BusinessDetail = {
	id: string;
	alias: string;
	name: string;
	image_url: string;
	is_claimed: boolean;
	is_closed: boolean;
	url: string;
	phone: string;
	display_phone: string;
	review_count: number;
	categories: Category[];
	rating: number;
	location: Location;
	coordinates: Coordinates;
	photos: string[];
	price: string;
	hours: Hour[];
	transactions: string[];
};

export type Category = {
	alias: string;
	title: string;
};

export type Coordinates = {
	latitude: number;
	longitude: number;
};

export type Hour = {
	open: Open[];
	hours_type: string;
	is_open_now: boolean;
};

export type Open = {
	is_overnight: boolean;
	start: string;
	end: string;
	day: number;
};

export type Location = {
	address1: string;
	address2: string;
	address3: string;
	city: string;
	zip_code: string;
	country: string;
	state: string;
	display_address: string[];
	cross_streets: string;
};
