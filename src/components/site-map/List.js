import React from "react";
import { Link } from "react-router-dom";

const List = (props) => {
  return (
    <>
      <p>
        <Link>{props.paragraph}</Link>
      </p>
      <ul>
        {props.list.map((e) => {
          return (
            <li>
              <Link>{e}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default List;
