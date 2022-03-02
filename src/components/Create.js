import React, { useState } from "react";
import "../css/create.scss";

const Create = ({ handleAddTodo }) => {
  const [value, setValue] = useState("");

  const todoWrite = (e) => {
    setValue(e.target.value);
    // console.log(setValue(e.target.value)); // 왜 undefined가 날까?
  };

  const todoListAdd = (e) => {
    e.preventDefault();
    handleAddTodo(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={todoListAdd}>
        <input
          placeholder="내용을 입력해주세요"
          className="create-input"
          value={value}
          onChange={todoWrite}
        ></input>
        <button>추가</button>
      </form>
    </>
  );
};

export default Create;
