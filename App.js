import {
  Inter_400Regular,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  ActivityIndicator,
  ImageBackground,
} from "react-native";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Inter-Regular": Inter_400Regular,
    "Inter-Bold": Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator />;
  }

  return (
    <ImageBackground
      source={require("./assets/light-bg.png")}
      style={{ flex: 1 }}
    >
      {/* Parent View  */}
      <View
        style={{
          flex: 1,
          justifyContent: "space-between",
          marginTop: 32,
          paddingHorizontal: 26,
        }}
      >
        {/* upper portion of the screen  */}
        <View style={{ flexDirection: "row" }}>
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "Inter-Regular",
                fontSize: 12,
                color: "#fff",
              }}
            >
              “The science of operations, as derived from mathematics more
              especially, is a science of itself, and has its own abstract truth
              and value.”
            </Text>
            <Text
              style={{
                fontFamily: "Inter-Bold",
                color: "#fff",
                fontSize: 12,
                marginTop: 8,
              }}
            >
              - Ada Lovelace
            </Text>
          </View>
          <Image source={require("./assets/refresh.png")} />
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
