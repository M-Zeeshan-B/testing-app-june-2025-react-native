import { StyleSheet, Text, View, Button } from "react-native";
import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const onAddPress = () => {
    setCount(count + 1);
  };
  const onSubtractPress = () => {
    if (count >= 1) {
      setCount(count - 1);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View>
          <Button title="-" onPress={onSubtractPress} />
        </View>
        <Text style={styles.counter}>{count}</Text>
        <View>
          <Button title="+" onPress={onAddPress} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  box: {
    backgroundColor: "rgb(236, 205, 68)",
    width: "100%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    flexDirection: "row",
  },
  counter: {
    fontSize: 30,
  },
});
