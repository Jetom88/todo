import React from "react";
import "../css/list.scss";
import { CheckOutlined, DeleteFilled } from "@ant-design/icons";

function List({ todos }) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index} className="list-container">
            <div className="list-con">
              <p>{todo}</p>
              <div className="list-btn">
                <CheckOutlined />
                <DeleteFilled />
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
