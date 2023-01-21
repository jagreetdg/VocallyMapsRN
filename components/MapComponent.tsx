import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

export default function MapComponent() {
	return (
		<MapView
			style={{ flex: 1 }}
			provider={PROVIDER_GOOGLE}
			showsUserLocation
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
		>
			<Marker
				key={0}
				coordinate={{ latitude: 37, longitude: -122 }}
				title="Test Marker"
				description="Test Marker Description"
			/>
		</MapView>
	);
}
