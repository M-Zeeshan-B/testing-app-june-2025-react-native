import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { styles } from "./Styles";

export default function WhatsappStatus() {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Updates</Text>
        <View style={styles.headerIcon}>
          <View>
            <Fontisto name="search" size={24} color="black" />
          </View>
          <View>
            <Entypo name="dots-three-vertical" size={24} color="black" />
          </View>
        </View>
      </View>
      <Text style={styles.statusHeaderText}>Status</Text>
    </View>
  );
}
