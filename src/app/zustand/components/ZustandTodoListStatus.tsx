"use client";

import TodoListStatus from "@/app/components/TodoListStatus";
import { useTodoStore } from "@/app/zustand/stores/store";
import React from "react";

export const ZustandTodoListStatus = () => {
  // todoStats 関数を実行して、結果を取得
  const stats = useTodoStore((state) => state.todoStats());

  return <TodoListStatus {...stats} />;
};
