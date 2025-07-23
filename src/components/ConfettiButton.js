import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import ConfettiCannon from "react-native-confetti-cannon";

export default function ConfettiButton() {
  const confettiRef = useRef();
  const boxRef = useRef();
  const onStartPress = () => {
    if (confettiRef) confettiRef.current.start();
  };
  const onStopPress = () => {
    if (confettiRef) confettiRef.current.stop();
  };
  const onResumePress = () => {
    if (confettiRef) confettiRef.current.resume();
  };

  return (
    <View ref={boxRef} style={styles.buttonBox}>
      <Button onPress={onStartPress} title="Cheee tha start" />
      <ConfettiCannon ref={confettiRef} count={200} origin={{ x: -10, y: 0 }} />
      <Button onPress={onStopPress} title="Cheee tha stop" />
      <Button onPress={onResumePress} title="Cheee tha resume" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBox: {
    gap: 10,
  },
});
