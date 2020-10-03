import { combineReducers } from "redux";

const initialState = {
	sajekDummyData: {
		title: "Sajek",
		details:
			"Sajek is a union at Baghaichari Upazila in Rangamati districts. Basically it is name of a river which separates Bangladesh from India. The river flows into the Karnafuli River in the Chittagong Hill Tracts. Sajek Valley is situated in the North angle of Rangamati, near the Mizoram border boundary area. The valley is 1,800 ft high form sea lavel. Many small rivers flow through the hills among them Kachalon and Machalong are famous. The main ethnic minorities on the valley are Chakma, Marma, Tripura, Pankua, Lushai and Sagma. The place is known as hill queen for its natural beauty and roof of Rangamati. Marishsha is a name of a place near Sajek Valley. Most of the houses are made with bamboo. There is another place near Sajek, it is Kanlak, and it is famous for its orange orchard.",
		hotel1: {
			title: "Light bright air stylish apt & safe peaceful stay",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$ night ",
		},
		hotel2: {
			title: "Apartment in lost panaroma",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$ night",
		},
		hotel3: {
			title: "AR Lounge & Pool(r&r + b&b)",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$",
		},
	},

	sreemangalDummyData: {
		title: "Sreemangal",
		details:
			"Sreemangal is an Upazila of Moulvibazar District[1] in the Sylhet Division of Bangladesh.It is said the name Sreemangal (or Srimangal) is named after Sri Das and Mangal Das; two brothers who settled on the banks of the Hail Haor.[2] A copper plate of Raja Marundanath from the 11th century was found in Kalapur. During an excavation at Lamua, an ancient statue of Ananta Narayan was dug out. In 1454, the Nirmai Shiva Bari was built and still stands today. Srimangal thana was established in 1912. The central town later became a pourashava in 1935.",
		hotel1: {
			title: "Light bright air stylish apt & safe peaceful stay",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$ night ",
		},
		hotel2: {
			title: "Apartment in lost panaroma",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$ night",
		},
		hotel3: {
			title: "AR Lounge & Pool(r&r + b&b)",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$",
		},
	},
	sundarbanDummyData: {
		title: "Sundarban",
		details:
			"The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. It comprises closed and open mangrove forests, agriculturally used land, mudflats and barren land, and is intersected by multiple tidal streams and channels. Four protected areas in the Sundarbans are enlisted as UNESCO World Heritage Sites, viz. Sundarbans National Park, Sundarbans West, Sundarbans South and Sundarbans East Wildlife Sanctuaries.[3] Despite these protections, the Indian Sundarbans were considered endangered in a 2020 assessment under the IUCN Red List of Ecosystems framework.",
		hotel1: {
			title: "Light bright air stylish apt & safe peaceful stay",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$ night ",
		},
		hotel2: {
			title: "Apartment in lost panaroma",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$ night",
		},
		hotel3: {
			title: "AR Lounge & Pool(r&r + b&b)",
			guests: "4 guests 2 bedrooms 2 beds 2 baths",
			kitchen: "air conditioning kitchen",
			additionalInfo: "cancellation flexibility available",
			ratings: "4.5(5)",
			price: "34$",
		},
	},
};

const userState = {
	user: {
		isSignedIn: false,
		name: null,
	},
};

const rootReducer = (state = initialState) => {
	return state;
};

const user = (state = userState, action) => {
	switch (action.type) {
		case "FETCH_USER":
			return action.payload;
		default:
			return state;
	}
};

export default combineReducers({
	user,
	rootReducer,
});
