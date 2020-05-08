import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Modal from "react-modal";
import SocketAPI from "../../api/SocketAPI";

const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 95%;
  padding: 1em;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  height: 100%;
  width: 50%;
`;

const Input = styled.input`
  width: 100%;
  background-color: ${(props) => props.theme.colors.primaryDark};
`;

const ChatModal = () => {
  const [text, setText] = useState("");
  const [receivedTexts, setReceviedTexts] = useState([]);
  const [sentTexts, setSentTexts] = useState([]);
  const isChatModalOpen = useSelector(
    (state) => state.platform.isChatModalOpen
  );
  const me = useSelector((state) => state.user.name);
  const other = useSelector((state) => state.platform.duelingUser);
  const socket = SocketAPI.getSocket();
  const details = useSelector((state) => state.platform.duelDetails);

  useEffect(() => {
    setSentTexts([
      `${me} challenges you to a duel!`,
      `Here are the propsed details: when?: ${details.when} what?: ${details.what.label} wager?: ${details.wager}`,
    ]);
  }, [details]);

  const sendText = () => {
    socket.emit("sendText", text);
    setText("");
  };

  return (
    <Modal isOpen={isChatModalOpen}>
      <ContentWrapper>
        <Row>
          <Column>
            <h2>{other}</h2>
            <div>
              {receivedTexts.map((text) => (
                <div>{text}</div>
              ))}
            </div>
          </Column>
          <Column>
            <h2>{me}</h2>
            <div>
              {sentTexts.map((text) => (
                <div>{text}</div>
              ))}
            </div>
          </Column>
        </Row>
        <div>
          <Input onChange={(e) => setText(e.target.value)} />
          <button onClick={sendText}>Send</button>
        </div>
      </ContentWrapper>
    </Modal>
  );
};

export default ChatModal;
