import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";

export const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  console.log(todo, "todo");

  const longPressHandler = () => {
    dispatch({ type: "delete", payload: todo.id });
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onLongPress={longPressHandler}>
      <View style={styles.todo}>
        <Text>{todo.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    borderWidth: 1,
    borderColor: "#eee",
    borderRadius: 5,
  },
});
