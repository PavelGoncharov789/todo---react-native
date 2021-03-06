import React, { useState } from "react";
import { View, StyleSheet, TextInput, Button, Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";

export const AddTodo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const todos = useSelector((state) => state);

  const addOneTodo = () => {
    if (value.trim()) {
      dispatch({ type: "addTodo", payload: value });
      setValue("");
    } else {
      Alert.alert(" Нельзя добавить пустую строку ");
    }
  };

  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        placeholder="Введите название..."
        autoCorrect={false}
        autoCapitalize="none"
      />
      <Button title="Добавить" onPress={addOneTodo} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15,
  },
  input: {
    width: "70%",
    borderStyle: "solid",
    borderWidth: 2,
    padding: 2,
    paddingLeft: 2,
    paddingRight: 2,
  },
});
