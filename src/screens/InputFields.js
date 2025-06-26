import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Image,
  ImageBackground,
} from "react-native";

export default function InputFields() {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: "https://cdn.pixabay.com/photo/2018/02/03/08/00/background-3127102_1280.jpg",
      }}
    >
      <Image style={styles.image} source={require("../../assets/764848.jpg")} />
      <TextInput
        placeholder="Enter Your Email"
        style={styles.input}
        placeholderTextColor={"white"}
      />
      <TextInput
        secureTextEntry={true}
        placeholder="Enter Your Password"
        style={styles.input}
        placeholderTextColor={"white"}
      />
      <View style={styles.button}>
        <Button title="Login" />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    // backgroundColor: "yellow",
    flex: 1,
    gap: 20,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  input: {
    width: "100%",
    borderBottomColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: "5%",
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 50,
  },
  button: {
    width: "100%",
  },
});
