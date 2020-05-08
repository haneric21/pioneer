import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import styled from "styled-components";
import {
  setDuelModalOpen,
  setChatModalOpen,
  setDuelDetails,
} from "../../store/platformSlice";

const Title = styled.h1`
  margin: 0 0 0.5em;
`;

const Details = styled.p``;

const ContentWrapper = styled.div`
  background-color: ${(props) => props.theme.colors.primary};
  height: 95%;
  padding: 1em;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  //   width: 70%;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 1em;
`;

const Input = styled.input`
  height: 1em;
`;

const DuelButton = styled.button`
  padding: 0.5em;
  background-color: ${(props) => props.theme.colors.primaryDark};
  margin-top: 1em;
  transition: background-color 1s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.primaryDarker};
  }
`;

const challengeOptions = ["1 hour challenge", "24 hour challenge"];

const DuelModal = () => {
  const dispatch = useDispatch();
  const [date, setDate] = useState(new Date());
  const [challengeType, setChallengeType] = useState("");
  const [wagerAmount, setWagerAmount] = useState(0);
  const isDuelModalOpen = useSelector(
    (state) => state.platform.isDuelModalOpen
  );

  const handleDuelInitiate = () => {
    dispatch(setDuelModalOpen(false));
    dispatch(
      setDuelDetails({ when: date, what: challengeType, wager: wagerAmount })
    );
    dispatch(setChatModalOpen(true));
  };
  const selectedUser = useSelector((state) => state.platform.duelingUser);
  return (
    <Modal isOpen={isDuelModalOpen}>
      <ContentWrapper>
        <Title>{`Challenge ${selectedUser} to a duel!`} </Title>
        <Details>Details of the duel here...</Details>
        <Row>
          <Section>
            <h2>When?</h2>
            <DateTimePicker onChange={(date) => setDate(date)} value={date} />
          </Section>
          <Section>
            <h2>What?</h2>
            <Dropdown
              options={challengeOptions}
              onChange={(selected) => setChallengeType(selected)}
              value={challengeType}
              placeholder="Select an option"
            />
          </Section>
        </Row>
        <Section>
          <h2>Wager!</h2>
          <Input
            type="number"
            name="wager"
            onChange={(e) => setWagerAmount(e.target.value)}
          />
        </Section>
        <DuelButton onClick={handleDuelInitiate}>
          Challenge to a Duel!
        </DuelButton>
      </ContentWrapper>
    </Modal>
  );
};

export default DuelModal;
