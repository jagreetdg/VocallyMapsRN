import React, { Component } from "react";
import { View } from "react-native";
import SearchBar from "react-native-dynamic-search-bar";

export default class DynamicSearchBar extends Component {

	render() {
		return (
			<SearchBar
				fontColor="#c6c6c6"
				iconColor="#c6c6c6"
				shadowColor="#282828"
				cancelIconColor="#c6c6c6"
				backgroundColor="#353d5e"
				placeholder="Search here"
				onChangeText={(text) => this.filterList(text)}
				onSearchPress={() => console.log("Search Icon is pressed")}
				onClearPress={() => this.filterList("")}
				onPress={() => alert("onPress")}
			/>
		);
	}
}
