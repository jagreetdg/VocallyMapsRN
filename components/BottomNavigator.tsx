import { FontAwesome } from "@expo/vector-icons";
import React, { Component, useEffect, useState } from "react";
import { View } from "react-native";
import { Icon } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

const BottomNavigator = () => {
	const [lightMode, setLightMode] = useState(true);
	const theme = useSelector((state: any) => state.theme);
	const dispatch = useDispatch();
	const [mode, setMode] = useState(theme.mode);
	useEffect(() => {
		setMode(theme.mode);
		setLightMode(theme.mode === "light" ? true : false);
	}, [theme]);

	return (
		<View
			style={{
				flex: 1,
				flexDirection: "column",
				backgroundColor: lightMode ? "white" : "black",
				maxHeight: "1%",
			}}
		>
			<View
				style={{
					position: "absolute",
					alignSelf: "center",
					width: 70,
					height: 70,
					borderRadius: 35,
					bottom: 25,
					zIndex: 10,
				}}
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
			</View>
			<View
				style={{
					position: "absolute",
					backgroundColor: lightMode ? "white" : "black",
					bottom: 0,
					zIndex: 1,
					width: "100%",
					height: 60,
					flexDirection: "row",
					justifyContent: "space-between",
					paddingHorizontal: 15,
					paddingVertical: 10,
				}}
			>
				<TabBarIcon name="compass" color={lightMode ? "black" : "white"} />
				<TabBarIcon name="map" color={lightMode ? "black" : "white"} />
				<FontAwesome size={30} style={{ marginBottom: -3 }} />
				<TabBarIcon name="bell" color={lightMode ? "black" : "white"} />
				<TabBarIcon name="user-o" color={lightMode ? "black" : "white"} />
			</View>
		</View>
	);
};

function TabBarIcon(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
	color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export default BottomNavigator;
