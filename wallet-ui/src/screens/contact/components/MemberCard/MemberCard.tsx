import React from "react";
import styled from "styled-components";
import { MemberType } from "types";
import { ReactComponent as TelegramIcon } from "assets/icons/socials/telegram.svg";
import { ReactComponent as EmailIcon } from "assets/icons/socials/email.svg";
import media from "styled-media-query";

type MemberCardProps = {
  member: MemberType;
  isTitleAbove?: boolean;
};

const MemberCard = ({ member, isTitleAbove }: MemberCardProps) => {
  return (
    <Root>
      <TopCard>
        <MemberPhoto $imgUrl={member.photoUrl}>
          <SocialsBadge>
            <TelegramIcon width={20} height={20} />
            <EmailIcon width={20} height={20} />
          </SocialsBadge>
        </MemberPhoto>
      </TopCard>
      <BottomCard></BottomCard>
    </Root>
  );
};

const Root = styled.div``;
const TopCard = styled.div``;
const BottomCard = styled.div``;
const MemberPhoto = styled.div<{ $imgUrl: string }>`
  width: 100%;
  max-width: 250px;
  aspect-ratio: 1;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  display: flex;
  background-image: ${({ $imgUrl }) => `url(${$imgUrl})`};
  overflow: hidden;
`;

const SocialsBadge = styled.div`
  display: flex;
  gap: 3.5rem;
  background: rgba(72, 72, 72, 0.5);
  backdrop-filter: blur(2px);
  padding: 0.6875rem 1.6875rem;
  border-radius: 8px;

  justify-self: flex-start;
  align-self: end;
  margin: 1rem;

  & > svg > g > path {
    fill: #fff;
  }

  ${media.greaterThan("large")`
  padding: 0.5rem 1rem;
  gap: 1rem;

    
  `}
`;

export default MemberCard;
