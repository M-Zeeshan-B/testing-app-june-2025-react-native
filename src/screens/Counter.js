import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Button from "../components/Button";
const minimumCountLimit = 0;
const change = 1;

export default function Counter() {
  const [count, setCount] = useState(minimumCountLimit);
  const onAddPress = () => {
    setCount(count + change);
  };
  const onSubtractPress = () => {
    if (count - change < minimumCountLimit) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.headingBox}>
        <Text style={styles.headingText}>Simple Counter</Text>
      </View>
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
    gap: 20,
  },
  headingBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%",
    backgroundColor: "rgb(236, 205, 68)",
    borderRadius: 50,
  },
  box: {
    backgroundColor: "rgb(236, 205, 68)",
    width: "100%",
    height: "30%",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
    flexDirection: "row",
  },
  counter: {
    fontSize: 80,
  },
  headingText: {
    fontSize: 40,
  },
});
