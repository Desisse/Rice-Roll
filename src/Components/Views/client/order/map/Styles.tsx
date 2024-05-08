import { StyleSheet } from "react-native";

const ClientOrderMapStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  imageLocation: {
    height: 60,
    width: 60,
    justifyContent: "center",
    position: "absolute",
  },
  refPoint: {
    position: "absolute",
    backgroundColor: "#EEE2DE",
    width: "70%",
    paddingVertical: 4,
    top: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  refPointText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "700",
  },
  buttonRefPoint: {
    width: "100%",
    marginTop: 15
    // paddingHorizontal: 30
  },
  info: {
    backgroundColor: "white",
    height: "37%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    position: "absolute",
    bottom: 0,
    paddingHorizontal: 30,
    alignItems: "center",
  },
  infoRow: {
    flexDirection: "row",
    marginTop: 15,
  },
  imageOrder: {
    width: 30,
    height: 30,
  },
  infoText: {
    flex: 1,
  },
  dateOrder: {
    fontSize: 16,
    fontWeight: "300",
  },
  date: {
    fontSize: 13,
    color: "#B4B4B8",
    marginTop: 3,
  },
  divider: {
    height: 1,
    backgroundColor: "#DDDDDD",
    width: '100%',
    marginTop: 15
  },
  infoClient: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20

  },
  imageUser: {
    height: 50,
    width: 50,
    borderRadius: 15
  },
  imagePhone: {
    height: 35,
    width: 35,
    borderRadius: 15
  },
  nameClient: {
    fontSize: 16,
    fontWeight: "500",
    flex: 1,
    marginLeft: 10
  },
  markerImage: {
    height: 50,
    width: 50
  },
  backContainer: {
    position: 'absolute',
    top: 50,
    left: 20
  },
  imageBack: {
    height: 30,
    width: 30
  }
});

export default ClientOrderMapStyles;
