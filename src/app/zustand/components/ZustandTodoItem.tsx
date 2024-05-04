"use client";

import React from "react";
import TodoItem from "@/app/components/TodoItem";
import { useTodoStore } from "@/app/zustand/stores/store";
import { Todo } from "@/app/types/Todo";

type ZustandTodoItemProps = {
  item: Todo;
};

export const ZustandTodoItem = ({ item }: ZustandTodoItemProps) => {
  const { toggleTodoCompleted, deleteTodo } = useTodoStore((state) => ({
    toggleTodoCompleted: state.toggleTodoCompleted,
    deleteTodo: state.deleteTodo,
  }));

  // ToDoアイテムの完了状態を切り替える
  const toggleCompleted = () => {
    toggleTodoCompleted(item.id);
  };

  // ToDoアイテムを削除する
  const deleteItem = () => {
    deleteTodo(item.id);
  };

  return (
    <TodoItem
      item={item}
      toggleCompleted={toggleCompleted}
      deleteItem={deleteItem}
    />
  );
};

export default ZustandTodoItem;
