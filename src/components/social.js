import React from "react";
import styled from "styled-components";
import { Mail, Github, Linkedin } from "@styled-icons/feather";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 10px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 10px;
  }

  @media (max-width: 578px) {
    margin-right: 0;
  }
`;

const Avatar = styled.img`
  border-radius: 50%;
  width: 120px;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 1em;
  &:hover {
    transform: scale(1.5);
    z-index: 1;
  }
`;

const ResumeButton = styled.a`
  color: #222;
  border: 1px solid #000;
  border-radius: 15px 50px 30px;
  padding: 0 20px;
  margin-bottom: 0.25em;
  &:hover {
    border: 1px solid #d91344;
    background: #d91344;
    color: #fff;
    text-decoration: none;
  }
`;

const SocialIcons = styled.a`
  color: #222;
  font-size: 22px;
  padding: 5px 15px;
  &:hover {
    color: #d91344;
    border-bottom: 1px solid #eee;
  }
`;

const Social = () => {
  return (
    <div>
      <Container>
        <Avatar
          className="bounce-in-top"
          src="https://avatars3.githubusercontent.com/u/8040772"
          alt="Me @ Disney"
        />
        <ResumeButton
          className="flicker-in-1"
          href="https://github.com/cjvalera/resume/raw/master/resume.pdf"
        >
          Resume
        </ResumeButton>
        <Wrapper className="flicker-in-1">
          <SocialIcons target="_blank" href="https://github.com/cjvalera">
            <Github size="20" alt="github" />
          </SocialIcons>
          <SocialIcons
            target="_blank"
            href="https://www.linkedin.com/in/cjvalera/"
          >
            <Linkedin size="20" alt="linkedin" />
          </SocialIcons>
          <SocialIcons target="_blank" href="mailto: cjvalera@hotmail.com">
            <Mail size="20" alt="mail" />
          </SocialIcons>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Social;
