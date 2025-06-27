import { StatusBar } from "expo-status-bar";
import { View, Button, Text, StyleSheet, Image, Alert } from "react-native";

export default function Exercise1() {
  //Business Logic Area
  const onButtonPress = () => {
    Alert.alert("You will be finished soon");
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <Image style={styles.icon} source={require("../../assets/764848.jpg")} />
      <Button title="just one click" onPress={onButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  icon: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
});
