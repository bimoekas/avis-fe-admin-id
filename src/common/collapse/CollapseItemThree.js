import React from "react";
import { Collapse } from "react-bootstrap";

const CollapseItemThree = ({ open }) => {
  return (
    <Collapse in={open}>
      <div className="row example-collapse-text ps-5 mb-4">
        <div className="col-12">
          <table className="table table-bordered text-avis">
            <thead>
              <tr>
                <th>Within Country</th>
                <th>Local Number</th>
                <th>Toll Free Number</th>
                <th>International Number</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Reservations</td>
                <td>(09) 526 2847</td>
                <td>0800 655 111</td>
                <td>+64 9 526 2847</td>
              </tr>
              <tr>
                <td>Reservations</td>
                <td>(09) 526 2847</td>
                <td>0800 655 111</td>
                <td>+64 9 526 2847</td>
              </tr>
              <tr>
                <td>Reservations</td>
                <td>(09) 526 2847</td>
                <td>0800 655 111</td>
                <td>+64 9 526 2847</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Collapse>
  );
};

export default CollapseItemThree;
