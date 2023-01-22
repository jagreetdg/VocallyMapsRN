import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';

import { Provider } from "react-redux";
import configureStore from './redux_store/store';
import BottomNavigator from './components/BottomNavigator';
import SearchBarJs from './components/SearchBarJs';
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';
import { FAB } from 'react-native-elements';
import MapComponentDynamic from './components/MapComponentDynamic';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const store = configureStore();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
			<SafeAreaProvider>
				<Provider store={store}>
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
            <MapComponentDynamic/>
						<BottomNavigator />
					</View>
				</Provider>
			</SafeAreaProvider>
		);
  }
}
