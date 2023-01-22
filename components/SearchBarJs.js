import React, { Fragment } from "react";
import { View } from "react-native";
import SearchableDropdown from "react-native-searchable-dropdown";

var items = [
	{
		id: 1,
		name: "Delhi",
	},
	{
		id: 2,
		name: "New York",
	},

	{
		id: 3,
		name: "London",
	},
	{
		id: 4,
		name: "Tokyo",
	},
	{
		id: 5,
		name: "Sydney",
	},
	{
		id: 6,
		name: "Berlin",
	},
	{
		id: 7,
		name: "Dublin",
	},
	{
		id: 8,
		name: "Mexico",
	},
];
class SearchBarJs extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedItems: [
				{
					id: 7,
					name: "Dublin",
				},
				{
					id: 8,
					name: "Mexico",
				},
			],
		};
	}
	render() {
    return (
			<View>
				<View
					backgroundColor="rgba(52, 52, 52, 0.1)"
				>
					<Fragment>
						{/* Single */}
						<SearchableDropdown
							onItemSelect={(item) => {
								const items = this.state.selectedItems;
								items.push(item);
								this.setState({ selectedItems: items });
							}}
							containerStyle={{ padding: 5 }}
							onRemoveItem={(item, index) => {
								const items = this.state.selectedItems.filter(
									(sitem) => sitem.id !== item.id
								);
								this.setState({ selectedItems: items });
							}}
							itemStyle={{
								padding: 10,
								marginTop: 2,
								backgroundColor: "#ddd",
								borderColor: "#bbb",
								borderWidth: 1,
								borderRadius: 5,
							}}
							itemTextStyle={{ color: "#222" }}
							itemsContainerStyle={{ maxHeight: 140 }}
							items={items}
							defaultIndex={2}
							resetValue={false}
							textInputProps={{
								placeholder: "Search Here",
								underlineColorAndroid: "transparent",
								style: {
									padding: 12,
									borderWidth: 1,
									borderColor: "#ccc",
									borderRadius: 5,
								},
								onTextChange: (text) => {},
							}}
							listProps={{
								nestedScrollEnabled: true,
							}}
						/>
					</Fragment>
				</View>
			</View>
		);
	}
}

export default SearchBarJs;
