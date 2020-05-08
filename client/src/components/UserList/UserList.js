import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import SocketAPI from "../../api/SocketAPI";
import { setUsers } from "../../store/platformSlice";
import UserRow from "./components/UserRow";

const StyledList = styled.div``;

const Title = styled.h1`
  margin: 0 0 0.5em;
`;

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.platform.users);
  const socket = SocketAPI.getSocket();

  socket.on("setUsers", (names) => {
    dispatch(setUsers(names));
  });

  return (
    <div>
      <Title>Users</Title>
      {users.map((user) => {
        return (
          <div key={user}>
            <UserRow name={user} />
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
