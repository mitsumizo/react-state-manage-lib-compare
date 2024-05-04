"use client";

import React, { useState } from "react";
import { useTodoStore } from "@/app/zustand/stores/store";
import TodoItemCreator from "@/app/components/TodoItemCreator";
import { getId } from "@/app/util/getId";

const ZustandTodoItemCreator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const addTodo = useTodoStore((state) => state.addTodo);

  const addItem = () => {
    addTodo({
      id: getId(),
      title: inputValue,
      isComplete: false,
    });
    setInputValue("");
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <TodoItemCreator
      inputValue={inputValue}
      onChange={onChange}
      addItem={addItem}
    />
  );
};

export default ZustandTodoItemCreator;
