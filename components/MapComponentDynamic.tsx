import MapView, { Callout, Marker, PROVIDER_GOOGLE } from "react-native-maps";
import React, { Component } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import { Image } from "react-native-elements";

const lightMode = true;
class MapComponentDynamic extends Component {
	render() {
		return (
			<View style={styles.container}>
        <MapView
          customMapStyle = {lightMode? lightMapStyle : darkMapStyle }
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

const darkMapStyle = [
	{
		elementType: "geometry",
		stylers: [
			{
				color: "#242f3e",
			},
		],
	},
	{
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#746855",
			},
		],
	},
	{
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#242f3e",
			},
		],
	},
	{
		featureType: "administrative.locality",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#d59563",
			},
		],
	},
	{
		featureType: "poi",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#d59563",
			},
		],
	},
	{
		featureType: "poi.park",
		elementType: "geometry",
		stylers: [
			{
				color: "#263c3f",
			},
		],
	},
	{
		featureType: "poi.park",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#6b9a76",
			},
		],
	},
	{
		featureType: "road",
		elementType: "geometry",
		stylers: [
			{
				color: "#38414e",
			},
		],
	},
	{
		featureType: "road",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#212a37",
			},
		],
	},
	{
		featureType: "road",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#9ca5b3",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry",
		stylers: [
			{
				color: "#746855",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "geometry.stroke",
		stylers: [
			{
				color: "#1f2835",
			},
		],
	},
	{
		featureType: "road.highway",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#f3d19c",
			},
		],
	},
	{
		featureType: "transit",
		elementType: "geometry",
		stylers: [
			{
				color: "#2f3948",
			},
		],
	},
	{
		featureType: "transit.station",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#d59563",
			},
		],
	},
	{
		featureType: "water",
		elementType: "geometry",
		stylers: [
			{
				color: "#17263c",
			},
		],
	},
	{
		featureType: "water",
		elementType: "labels.text.fill",
		stylers: [
			{
				color: "#515c6d",
			},
		],
	},
	{
		featureType: "water",
		elementType: "labels.text.stroke",
		stylers: [
			{
				color: "#17263c",
			},
		],
	},
];

const lightMapStyle: any = [];

export default MapComponentDynamic;
