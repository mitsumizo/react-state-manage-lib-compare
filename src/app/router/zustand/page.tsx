import Header from "@/app/components/Header";
import ZustandTodo from "@/app/zustand/components/ZustandTodo";
import React from "react";

const ZustandPage = () => {
  return (
    <>
      <Header name="Zustand" />
      <ZustandTodo />
    </>
  );
};

export default ZustandPage;
