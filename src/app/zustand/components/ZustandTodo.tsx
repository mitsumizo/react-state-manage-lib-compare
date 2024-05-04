"use client";

import { JotaiTodoItem } from "@/app/jotai/components/JotaiTodoItem";
import JotaiTodoItemCreator from "@/app/jotai/components/JotaiTodoItemCreator";
import { JotaiTodoListFilter } from "@/app/jotai/components/JotaiTodoListFilters";
import { JotaiTodoListStatus } from "@/app/jotai/components/JotaiTodoListStatus";
import { fileterdTodoListState } from "@/app/jotai/selectors/todoFilterSelector";
import ZustandTodoItem from "@/app/zustand/components/ZustandTodoItem";
import ZustandTodoItemCreator from "@/app/zustand/components/ZustandTodoItemCreator";
import { ZustandTodoListFilter } from "@/app/zustand/components/ZustandTodoListFilters";
import { ZustandTodoListStatus } from "@/app/zustand/components/ZustandTodoListStatus";
import { useTodoStore } from "@/app/zustand/stores/store";
import { useAtomValue } from "jotai";
import React from "react";

const ZustandTodo = () => {
  // 対象のフィルターでフィルタリングされたTODOリスト
  const todoList = useTodoStore((state) => state.getFilteredTodos());

  return (
    <div className="container mx-auto mt-10">
      <ZustandTodoListStatus />
      <ZustandTodoListFilter />
      <ZustandTodoItemCreator />
      <div className="max-h-96 overflow-y-auto my-10">
        <h2 className="text-2xl font-bold">Todo List</h2>
        <div className="flex flex-wrap -mx-2">
          {todoList.map((todoItem, index) => (
            <div className="w-full sm:w-1/2 md:w-1/3 px-2 my-2" key={index}>
              <ZustandTodoItem item={todoItem} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ZustandTodo;
