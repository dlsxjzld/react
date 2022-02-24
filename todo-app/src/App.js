import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

// useState, useRef, useCallback
// 배열 map , filter , concat
// 객체 ...~ (spread)
// scss classnames ( 조건부 스타일링 )
// 객체 비구조화 할당

function createBultTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

const App = () => {
  const [todos, setTodos] = useState(createBultTodos);

  //고윳값으로 사용될 id
  // ref를 사용하여 변수 담기
  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos.concat(todo));
      setTodos((todos) => todos.concat(todo)); // useState의 함수형 업데이트
      nextId.current += 1; // nextId 1씩 더하기
    },
    // [todos],
    [],
  );

  const onRemove = useCallback(
    (id) => {
      // setTodos(todos.filter((todo) => todo.id !== id));
      setTodos((todos) => todos.filter((todo) => todo.id !== id));
    },
    // [todos],
    [],
  );

  const onToggle = useCallback(
    (id) => {
      // setTodos(
      setTodos((todos) =>
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    // [todos],
    [],
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
