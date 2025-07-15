import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "rgba(00,255,00,0.3)",
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "500",
    color: "grey",
  },
  headerIcon: {
    flexDirection: "row",
    gap: 10,
  },
  statusHeaderText: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 10,
    marginVertical: 10,
    // backgroundColor: "rgba(255,00,00,0.3)",
  },
  statusContainer: {
    overflow: "hidden",
    width: 100,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  backgroundImageContainer: {
    width: 100,
    height: 150,
    // resizeMode: "cover",
    // backgroundColor: "#f0f0f0",
    // alignItems: "center",
    // justifyContent: "center",
    // position: "relative",
  },
  statusProfilePictureContainer: {
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25d366",
    borderRadius: 18,
    margin: 10,
  },
  statusProfilePicture: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  statusNameContainer: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    // bottom: 0,
    // backgroundColor: "rgba(255,00,00,0.3)",
  },
  statusName: {
    color: "white",
    fontWeight: "bold",
  },
  channelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exploreContainer: {
    width: 80,
    height: 30,
    borderRadius: 30,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "10",
  },
  exploreText: {
    fontWeight: "bold",
  },
});
