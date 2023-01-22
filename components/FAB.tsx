import React, { Component } from "react";
import {
	Platform,
	StyleSheet,
	View,
	Image,
	TouchableOpacity,
	Alert,
	Text,
} from "react-native";
import { Icon } from "react-native-elements";

export default class FAB extends Component {
	FloatingButtonEvent = () => {
		Alert.alert("Floating Button Clicked");
	};

	render() {
		return (
			<View style={styles.container}>
				<TouchableOpacity
					activeOpacity={0.5}
					onPress={this.FloatingButtonEvent}
					style={styles.TouchableOpacityStyle}
				>
					<Icon
						name="add"
						type="material"
						color="red"
						containerStyle={{ alignSelf: "center" }}
						reverse
						size={28}
						onPress={() => {}}
					/>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#e5e5e5",
	},
	headerText: {
		fontSize: 20,
		textAlign: "center",
		margin: 10,
		fontWeight: "bold",
	},
	TouchableOpacityStyle: {
		position: "absolute",
		width: 50,
		height: 50,
		alignItems: "center",
		justifyContent: "center",
		right: 30,
		bottom: 30,
	},
	FloatingButtonStyle: {
		resizeMode: "contain",
		width: 50,
		height: 50,
	},
});
