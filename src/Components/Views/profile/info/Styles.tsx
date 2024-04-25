import { StyleSheet } from "react-native";

const ProfileInfoStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    opacity: 0.7,
    bottom: "20%",
  },
  form: {
    width: "100%",
    height: "45%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  formText: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 15,
  },
  userContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "16%",
  },
  userImage: {
    width: 180,
    height: 180,
    alignSelf: "center",
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2
  },
  userText: {
    color: "white",
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
  },
  formImage: {
    height: 30,
    width: 30,
  },
  formInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  formContent: {
    marginLeft: 15,
  },
  formTextDescription: {
    fontSize: 12,
    color: "#B6C4B6",
  },
  logout: {
    position: "absolute",
    top: 40,
    right: 16,
  },
  logoutImage: {
    width: 30,
    height: 30,
  },
});

export default ProfileInfoStyles;
