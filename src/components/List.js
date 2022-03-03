import React from "react";
import "../css/list.scss";
import { CheckOutlined, DeleteFilled } from "@ant-design/icons";

function List({ todos, handleRemove, handleChecked }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index} className="list-container">
            <div className="list-con">
              <p className={`${todo.checked ? "checked" : ""}`}>{todo.text}</p>
              <div className="list-btn">
                <CheckOutlined
                  className="checked-icon"
                  onClick={() => handleChecked(todo.id)}
                />
                <DeleteFilled
                  className="delete-icon"
                  onClick={() => handleRemove(todo.id)}
                />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
