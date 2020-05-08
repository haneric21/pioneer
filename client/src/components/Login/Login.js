import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import SocketAPI from "../../api/SocketAPI";
import { userLogin } from "../../store/userSlice";

const NameForm = styled.input``;

const SubmitButton = styled.button``;

const Login = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  return (
    <div>
      <label>
        <p>Name</p>
        <NameForm
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
        />
        <SubmitButton
          onClick={() => {
            dispatch(userLogin(name));
          }}
        >
          Submit Name
        </SubmitButton>
      </label>
    </div>
  );
};

export default Login;
