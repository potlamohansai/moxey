import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./table.css";
import Form from "./Form";
import dummyData from "./dummyData.js";

const Table = () => {
  const [users, setUsers] = useState(dummyData);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddUser = (data) => {
    const newUser = {
      ...data,
      id: Date.now(),
      status: "ACTIVE",
      expiryBy: "12-06-2025",
    };
    setUsers([...users, newUser]);
    console.log(users);
    setIsDrawerOpen(false);
  };

  const handleRemoveUser = (userId) => {
    setUsers(users.filter((user) => user.id != userId));
  };
  return (
    <>
      <h4>Settings</h4>
      <div className="newuser-div">
        <h5>Users List</h5>
        <h6 className="btn-primary" onClick={() => setIsDrawerOpen(true)}>
          +Add New User
        </h6>
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
          <tbody className="table-white">
            {users.map((user) => (
              <tr key={user.id}>
                <td>
                  <button type="button" class="btn btn-outline-success">
                    {user.status}
                  </button>
                </td>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>
                <td>{user.expiryBy}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className="btn btn-secondary dropdown-toggle"
                      type="button"
                      id="dropdownMenuButton"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Actions
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton"
                    >
                      <li>
                        <button
                          className="dropdown-item"
                          onClick={() => handleRemoveUser(user.id)}
                        >
                          Remove User
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Drawer
          open={isDrawerOpen}
          onClose={() => setIsDrawerOpen(false)}
          direction="right"
          size="500px"
        >
          <Form onSubmit={handleAddUser} />
        </Drawer>
      </div>
    </>
  );
};

export default Table;
