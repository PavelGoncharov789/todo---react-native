
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { AddTodo } from './src/AddTodo';
import { Navbar } from './src/Navbar';
import { Todo } from './src/Todo';

export default function App() {
  const[todos, setTodos] = useState([])

  const addTodo = (title) =>{
    // const newTodo = {
      // id: Date.now().toString(),
      // title: title
    // }

    // setTodos(newTodo,...todos)

    // setTodos((prevTodos) => {
    //   return[
    //     ...prevTodos,newTodo
    //   ]
    // })
    setTodos(prev => [...prev,{
      id: Date.now().toString(),
      title
    }])
  }
  return (
    <View>
      <Navbar title='Todo App'/>
      <AddTodo onSubmit={addTodo}/>
      <View>
        {todos.map(todo => { 
          return<Todo todo={todo}  key={todo.id}/>
        })}
      </View>
    </View>
  );
}


