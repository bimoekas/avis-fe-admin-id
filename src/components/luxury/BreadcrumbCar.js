import React from "react";
import { Breadcrumb } from "react-bootstrap";

const BreadcrumbCar = (props) => {
  return (
    <div
      style={{
        borderTop: "1px solid rgb(204, 204, 204)",
        borderBottom: "1px solid rgb(204, 204, 204)",
      }}
      className="mt-1"
    >
      <div className="container pt-2 pb-2">
        <Breadcrumb className="pb-0 mb-0">
          {props.breadcrumb.map((item, i) => {
            return props.breadcrumb.length == i + 1 ? (
              <Breadcrumb.Item active>{item}</Breadcrumb.Item>
            ) : (
              <Breadcrumb.Item href={`${process.env.PUBLIC_URL}/`}>
                {item}
              </Breadcrumb.Item>
            );
          })}
        </Breadcrumb>
      </div>
    </div>
  );
};

export default BreadcrumbCar;
