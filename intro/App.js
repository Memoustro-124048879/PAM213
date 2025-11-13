import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MenuScreen from "./screens/MenuScreen";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <MenuScreen></MenuScreen>
    </GestureHandlerRootView>
  );
}
