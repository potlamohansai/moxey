import React, { useState } from "react";
import "./table.css";

const Table = () => {
  const [users, setUsers] = useState([]);
  return (
    <>
      <h4>Settings</h4>
      <div className="newuser-div">
        <h5>Users List</h5>
        <h6 className="btn-primary">+Add New User</h6>
      </div>
      <div>
        <table className="table">
          <thead className="table-light">
            <tr>
              <th>STATUS</th>
              <th>USER ID</th>
              <th>EMAIL ADDRESS</th>
              <th>FIRST NAME</th>
              <th>LAST NAME</th>
              <th>USER ROLE</th>
              <th>EXPIRY BY</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              <tr>
                <td>{user.status}</td>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>
                <td>{user.expiryBy}</td>
                <td>{user.actions}</td>
              </tr>;
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
