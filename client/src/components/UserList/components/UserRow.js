import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setDuelModalOpen, setDuelingUser } from "../../../store/platformSlice";

const StyledRow = styled.div`
  display: flex;
  padding: 1em;
  margin-bottom: 1em;
  border: 1px solid black;
  width: 200px;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.primaryHover};
`;

const ChallengeButton = styled.button``;

const UserRow = ({ name }) => {
  const dispatch = useDispatch();
  const challengeHandler = () => {
    dispatch(setDuelingUser(name));
    dispatch(setDuelModalOpen(true));
  };
  return (
    <StyledRow>
      <div>{name}</div>
      <ChallengeButton onClick={challengeHandler}>Challenge!</ChallengeButton>
    </StyledRow>
  );
};

export default UserRow;
