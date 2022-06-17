import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    color: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    height: "120%"
  },
  matchText: {
    fontWeight: "600",
    fontSize: 45,
  },
  matchSubText: {
    fontWeight: "normal",
    fontSize: 15,
    marginTop: 10
  },
  startConversationText: {

  },
  startConversationButton: {
    width: 307,
    paddingVertical: 10,
    paddingHorizontal: 50,
    height: 49,
    marginTop: 60,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  connectButton: {
    width: 307,
    paddingVertical: 10,
    paddingHorizontal: 50,
    height: 49,
    marginTop: 150,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000000",
    flexDirection: "row",
  },
  connectText: {
    color: "#FFFFFF",
    fontWeight: "500",
    paddingLeft: 20
  },
  buttonImage: {
    width: 18,
    height: 18,
    marginLeft: 10
  }
});

export default {
  styles: styles
};
