import { create } from "zustand";
import { FilterState } from "@/app/types/FilterState";
import { TodoState, TodoActions } from "@/app/zustand/interfaces/TodoState";
import { Todo } from "@/app/types/Todo";

export const useTodoStore = create<TodoState & TodoActions>((set, get) => ({
  todos: [],
  filter: FilterState.SHOW_ALL,
  setFilter: (filter) => set({ filter }),
  getFilteredTodos: () => {
    const todos = get().todos;
    const filter = get().filter;
    switch (filter) {
      case FilterState.SHOW_ALL:
        return todos;
      case FilterState.SHOW_COMPLETED:
        return todos.filter((todo) => todo.isComplete);
      case FilterState.SHOW_UNCOMPLETED:
        return todos.filter((todo) => !todo.isComplete);
      default:
        return todos;
    }
  },
  todoStats: () => {
    const todos = get().todos;
    const totalNum = todos.length;
    const totalCompletedNum = todos.filter((todo) => todo.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    const percentCompleted =
      totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100;

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    };
  },
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] })),
  toggleTodoCompleted: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      ),
    })),
  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
}));
