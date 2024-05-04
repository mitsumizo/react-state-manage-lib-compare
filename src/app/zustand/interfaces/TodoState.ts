import { FilterState } from "@/app/types/FilterState";
import { Todo } from "@/app/types/Todo";

// Todo状態
export interface TodoState {
  // Todoの全て
  todos: Todo[];
  // Todoに対するフィルダー
  filter: FilterState;
}

// Todoの統計情報に対するインターフェース
interface TodoStats {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
}

// Todoに対するアクション
export interface TodoActions {
  // フィルターに対するセッター
  setFilter: (filter: FilterState) => void;
  // フィルターにかけられたTodoのリスト一覧
  getFilteredTodos: () => Todo[];
  // Todoを追加
  addTodo: (newTodo: Todo) => void;
  // 対象のタスクを済みにする(更新)
  toggleTodoCompleted: (id: number) => void;
  // 対象のタスクを削除する(削除)
  deleteTodo: (id: number) => void;
  // Todoの状態を解析するメソッド
  todoStats: () => TodoStats;
}
