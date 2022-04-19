import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Navbar = (props) => {
  const { title } = props;
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    height: 55,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#00cc00",
    paddingBottom: 10,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});
