import { View } from "react-native";
import { useState } from "react";
import { AddTodo } from "./src/AddTodo";
import { Navbar } from "./src/Navbar";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { DrawTodo } from "./src/DrawTodo";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (title) => {
    setTodos((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
      },
    ]);
  };

  const defaultstate = [];

  const reduser = (state = defaultstate, action) => {
    const value = action.payload;
    console.log(value, "value");
    if (action.type === "addTodo") {
      return [...state, {text:value, id: new Date()}];
    } else if (action.type === "delete") {
      return state.filter((todo) => todo.id !== value);
    }
    return state;
  };

  const store = createStore(reduser);
  console.log(store, "store");

  return (
    <Provider store={store}>
      <View>
        <Navbar title="Todo App" />
        <View>
          <AddTodo onSubmit={addTodo} />
          <DrawTodo />
        </View>
      </View>
    </Provider>
  );
}
