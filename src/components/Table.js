import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import "./table.css";
import Form from "./Form";

const Table = () => {
  const [users, setUsers] = useState([
    {
      status: "pending",
      id: 1563783,
      email: "potla@gmail.com",
      firstName: "Mohan",
      lastName: "potla",
      role: "agent",
      expiryBy: "14-06-2024",
      actions: "Delete",
    },
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleAddUser = (data) => {
    const newUser = { ...data, id: Date.now() };
    setUsers([...users, newUser]);
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
          <tbody>
            {users.map((user) => (
              <tr>
                <td>{user.status}</td>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.role}</td>
                <td>{user.expiryBy}</td>
                <td>{user.actions}</td>
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
