import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { Component } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";

class MapComponentDynamic extends Component {
	render() {
		return (
			<View style={styles.container}>
				<MapView
					style={styles.map}
					initialRegion={{
						latitude: 37.78825,
						longitude: -122.4324,
						latitudeDelta: 0.1,
						longitudeDelta: 0.1,
					}}
				>
					<Marker
						coordinate={{ latitude: 37.7882, longitude: -122.4327 }}
						title={"Izakaya Haruchi"}
						description={"Pub in Japantown"}
					>
						<Image
							source={require("../assets/images/pub.png")}
							style={{ width: 35, height: 35 }}
						/>
					</Marker>

					<Marker
						coordinate={{ latitude: 37.75824, longitude: -122.4523 }}
						title={"Konbini Mart"}
						description={"Store on Clarendon Ave"}
					>
						<Image
							source={require("../assets/images/mart.png")}
							style={{ width: 35, height: 35 }}
						/>
					</Marker>

					<Marker
						coordinate={{ latitude: 37.8, longitude: -122.46 }}
						title={"Sheridan Park"}
						description={"Park on Sheridan Ave"}
					>
						<Image
							source={require("../assets/images/park.png")}
							style={{ width: 35, height: 35 }}
						/>
					</Marker>

					<Marker
						coordinate={{ latitude: 37.77, longitude: -122.41 }}
						title={"Gibraltar Bank"}
						description={"Bank near Costco Wholesale"}
					>
						<Image
							source={require("../assets/images/bank.png")}
							style={{ width: 35, height: 35 }}
						/>
					</Marker>
				</MapView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: "#F5FCFF",
		},
		map: {
			position: "absolute",
			top: 0,
			left: 0,
			right: 0,
			bottom: 0,
		},
});

export default MapComponentDynamic;
