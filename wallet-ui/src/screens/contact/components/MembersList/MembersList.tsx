import React from "react";
import styled from "styled-components";
import { members } from "data";
import { MemberCard } from "../MemberCard";
import media from "styled-media-query";

const MembersList = () => {
  return (
    <List>
      {members.map((member) => (
        <MemberCard member={member} />
      ))}
    </List>
  );
};

const List = styled.ul`
  all: unset;
  display: grid;
  gap: 2.5rem;

  ${media.greaterThan("large")`
    display: flex;
    gap: 4.375rem;
  `}
`;

const Member = styled.li`
  all: unset;
`;

export default MembersList;
