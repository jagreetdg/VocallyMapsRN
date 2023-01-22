import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

import { FontAwesome } from '@expo/vector-icons';
import { Provider } from "react-redux";
import BottomNavigator from './components/BottomNavigator';
import MapComponentDynamic from './components/MapComponentDynamic';
import SearchBarJs from './components/SearchBarJs';
import configureStore from './redux_store/store';

import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button,TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { switchMode } from "./redux_store/actions";

export default function App() {

  const store = configureStore();

	return (
		<Provider store={store}>
			<InnerApp />
		</Provider>
	);
}

const InnerApp = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [lightMode, setLightMode] = useState(true);

  const theme = useSelector((state:any) => state.theme);
	const dispatch = useDispatch();
  const [mode, setMode] = useState(theme.mode);
  
  useEffect(() => {
    setMode(theme.mode);
    setLightMode(theme.mode === 'light' ? true : false);
	}, [theme]);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
			<SafeAreaProvider>
					<View
						style={{
							flex: 1,
							flexDirection: "column",
							backgroundColor: "white",
							paddingTop: 40,
						}}
					>
						<StatusBar backgroundColor="rgba(1.0, 0, 0, 0.2)" translucent />
						<SearchBarJs />
						{/* <MapComponent /> */}
						<MapComponentDynamic />
						<View
							style={{
								position: "absolute", //use absolute position to show button on top of the map
								top: "20%", //for center align
								alignSelf: "flex-end",
								paddingRight: 20, //for align to right
							}}
						>
							<TouchableOpacity
								style={{
									alignItems: "center",
									justifyContent: "center",
									width: 50,
									height: 50,
									backgroundColor: lightMode ? "white" : "black",
                  borderRadius: 50,
                }}
                onPress={
                  () => dispatch(switchMode(theme.mode === 'light' ? 'dark' : 'light'))
                }
							>
								<CircleButton
									name="sliders"
                  color={lightMode ? "black" : "white"}
								/>
							</TouchableOpacity>
						</View>
						<View
							style={{
								position: "absolute", //use absolute position to show button on top of the map
								top: "30%", //for center align
								alignSelf: "flex-end",
								paddingRight: 20, //for align to right
							}}
						>
							<TouchableOpacity
								style={{
									alignItems: "center",
									justifyContent: "center",
									width: 50,
									height: 50,
									backgroundColor: lightMode ? "white" : "black",
									borderRadius: 50,
                }}
							>
								<CircleButton
									name="location-arrow"
									color={lightMode ? "black" : "white"}
								/>
							</TouchableOpacity>
						</View>
						<BottomNavigator />
					</View>
			</SafeAreaProvider>
		);
  }
}

function CircleButton(props: {
	name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
	return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props}/>;
}
