import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

export default function Button({ onPress, title }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.buttonCon}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonCon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  buttonText: {
    fontSize: 40,
  },
});
