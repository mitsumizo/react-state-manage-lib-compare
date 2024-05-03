import React from "react";

type TodoListStatusProps = {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
  percentCompleted: number;
};

const TodoListStatus = (props: TodoListStatusProps) => {
  return (
    <div className="shadow-lg sm:w-9/12 md:w-1/3 mb-10 p-5">
      <ul className="font-bold">
        <li>Total items : {props.totalNum}</li>
        <li>Items Completed : {props.totalCompletedNum}</li>
        <li>Items not Completed : {props.totalUncompletedNum}</li>
        <li>Percent completed : {props.percentCompleted}%</li>
      </ul>
    </div>
  );
};

export default TodoListStatus;
