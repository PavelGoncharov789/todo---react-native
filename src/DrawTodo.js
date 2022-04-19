import React from "react";
import { FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Todo } from "./Todo";

export const DrawTodo = (props) => {
  const tod = useSelector((state) => state);

  return (
    <FlatList data={tod} renderItem={({ item }) => <Todo todo={item} />} />
  );
};
