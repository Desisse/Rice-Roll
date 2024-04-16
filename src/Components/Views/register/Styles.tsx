import { StyleSheet } from "react-native";

const RegisterStyles = StyleSheet.create({
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
    height: "72%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    padding: 30,
  },
  userContainer: {
    position: "absolute",
    alignSelf: "center",
    top: "5%",
  },
  userImage: {
    width: 120,
    height: 120,
    alignSelf: "center",
  },
  userText: {
    color: "white",
    fontSize: 20,
    fontWeight: "200",
    textAlign: "center",
  },
  formText: {
    fontWeight: "bold",
    fontSize: 18,
  },
  formInput: {
    flexDirection: "row",
    marginTop: 30,
  },
  textInput: {
    flex: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#AAAAAA",
    marginLeft: 15,
  },
  formIcon: {
    width: 28,
    height: 28,
    marginTop: 5,
  },
  formRegister: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 30,
  },
  formRegisterText: {
    fontStyle: "italic",
    color: "#B91C1C",
    borderBottomWidth: 1,
    borderBottomColor: "#B91C1C",
    fontWeight: "bold",
    marginLeft: 10,
  },
});

export default RegisterStyles;
