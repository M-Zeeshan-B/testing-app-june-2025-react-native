import { useState } from "react";
import { View, StyleSheet, TextInput, Button, Text } from "react-native";

export default function StatePractice() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <View style={styles.container}>
      <Text>User Enterd Data :</Text>
      <Text>{email}</Text>
      <Text>{password}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter email"
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        onChangeText={setPassword}
      />

      <Button title="login" />
    </View>
  );
}
const styles = new StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 20,
    //----------Different Formats for adding colors
    // backgroundColor: "red",
    // backgroundColor: "#ff0000",
    // backgroundColor: "rgb(255,0,0)",
    // backgroundColor: "rgba(255,0,0,0.5)",
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
  },
});
