import React from "react";
import { Text, View, StyleSheet, Button, TouchableOpacity } from "react-native";

const CoreComponent = () => {
  const showAlert = () => {
    alert("Hello world!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Welcome!</Text>
      <Text style={styles.text}>
        {" "}
        Hello, welcome to{" "}
        <Text style={{ ...styles.text, ...styles.boldText }}>the new app!</Text>
      </Text>
      <TouchableOpacity onPress={() => showAlert()} style={styles.button}>
        <Text style={styles.text}>Click Me!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  boldText: {
    fontWeight: "bold",
  },

  text: {
    color: "lightgreen",
    fontWeight: "normal",
    fontSize: 30,
    textAlign: "center",
  },
  button: {
    backgroundColor: "white",
    borderColor: "lightgreen",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
  },
});

export default CoreComponent;