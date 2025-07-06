import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "rgba(00,255,00,0.3)",
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
    backgroundColor: "rgba(255,00,00,0.3)",
  },
});
