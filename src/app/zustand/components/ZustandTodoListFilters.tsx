"use client";

import TodoListFilter from "@/app/components/TodoListFilter";
import { useTodoStore } from "@/app/zustand/stores/store";

export const ZustandTodoListFilter = () => {
  // filter と setFilter を同時に取得する
  const { filter, setFilter } = useTodoStore((state) => ({
    filter: state.filter,
    setFilter: state.setFilter,
  }));
  return <TodoListFilter filter={filter} set={setFilter} />;
};
