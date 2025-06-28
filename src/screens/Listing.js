import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function Listing() {
  const glacier = [
    "https://cdn.pixabay.com/photo/2020/04/28/12/55/iceland-5104382_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/01/13/14/59/glacier-7716270_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/01/15/12/57/kyrgyzstan-4767882_1280.jpg",
    "https://cdn.pixabay.com/photo/2022/10/08/20/33/glacier-7507771_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/04/20/19/20/chile-4142505_1280.jpg",
  ];
  const nature = [
    "https://cdn.pixabay.com/photo/2015/05/03/18/19/sheep-751481_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/06/21/09/48/hill-5324149_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/07/01/18/21/water-8100724_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/01/18/10/07/sunset-8516639_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/05/03/11/20/bird-7967356_1280.jpg",
  ];
  return (
    <ScrollView>
      <Text style={styles.headingText}>Beautiful Glaciers :</Text>
      <ScrollView horizontal={true}>
        {glacier.map((item, index) => {
          return (
            <Image
              key={index}
              source={{ uri: item }}
              style={styles.glacierImg}
            />
          );
        })}
      </ScrollView>
      <Text style={styles.headingText}>Nature Photos :</Text>
      {nature.map((item, index) => {
        return (
          <Image key={index} source={{ uri: item }} style={styles.natureImg} />
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headingText: {
    marginTop: 25,
    alignItems: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  glacierImg: {
    width: 250,
    height: 150,
    margin: 10,
    borderRadius: 20,
  },
  natureImg: {
    width: "95%",
    height: 150,
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 20,
  },
});
