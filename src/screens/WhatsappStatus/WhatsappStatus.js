import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  ImageBackground,
} from "react-native";
import React from "react";
import Entypo from "@expo/vector-icons/Entypo";
import Fontisto from "@expo/vector-icons/Fontisto";
import { styles } from "./Styles";
import ConfettiButton from "../../components/ConfettiButton";

export default function WhatsappStatus() {
  const numericData = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  const _renderStatus = (item) => {
    return (
      <View style={styles.statusContainer}>
        <ImageBackground
          source={{
            uri: "https://cdn.pixabay.com/photo/2020/01/15/12/57/kyrgyzstan-4767882_1280.jpg",
          }}
          style={styles.backgroundImageContainer}
        >
          <View style={styles.statusProfilePictureContainer}>
            <Image
              style={styles.statusProfilePicture}
              source={require("../../../assets/764848.jpg")}
            />
          </View>
          <View style={styles.statusNameContainer}>
            <Text style={styles.statusName}>Dummy Name</Text>
          </View>
        </ImageBackground>
      </View>
    );
  };

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
      <FlatList
        data={numericData}
        horizontal={true}
        renderItem={({ item }) => _renderStatus(item)}
      />
      <View style={styles.channelRow}>
        <Text style={styles.statusHeaderText}>Channels</Text>
        <View style={styles.exploreContainer}>
          <Text style={styles.exploreText}>Explore</Text>
        </View>
      </View>
      <ConfettiButton />
    </View>
  );
}
