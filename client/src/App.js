import React, { useEffect, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
// import openSocket from "socket.io-client";
// import SocketAPI from "./api/SocketAPI";
// import { setTest } from "./store/slice";
import { Login, UserList, DuelModal, ChatModal } from "./components";
import lightTheme from "./theme/lightTheme";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1.5em;
`;

const App = () => {
  // const dispatch = useDispatch();
  const username = useSelector((state) => state.user.name);

  return (
    <ThemeProvider theme={lightTheme}>
      <Wrapper>
        <div>{username == "" ? <Login /> : <UserList />}</div>
        {/* <UserList /> */}
        <DuelModal />
        <ChatModal />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
